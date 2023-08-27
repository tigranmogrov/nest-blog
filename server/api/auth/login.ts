import { compareSync } from 'bcrypt';
import { H3Error, H3Event } from 'h3';
import { User } from '~~/server/api/users/user.model';
import { authUserResponse } from '~~/server/utils/authUser.response';
import { IUserResponse } from '~~/types/user';
import { tokenService } from '~~/server/services/token.service';

export default defineEventHandler(
  async (event: H3Event): Promise<IUserResponse | H3Error> => {
    try {
      const body = await readBody(event);
      if (!body) {
        return createError({ statusCode: 400, statusMessage: 'Bad request.' });
      }
      const user = await User.findOne({ email: body.email });
      if (!user) {
        return createError({
          statusCode: 401,
          statusMessage: 'Invalid email or password',
        });
      }

      const isPasswordCorrect = compareSync(body.password, user.password);
      if (!isPasswordCorrect) {
        return createError({
          statusCode: 401,
          statusMessage: 'Invalid email or password',
        });
      }

      const tokens = tokenService.generateTokens(user);

      tokenService.sendRefreshToken(event, tokens.refreshToken);

      return {
        access_token: tokens.accessToken,
        user: authUserResponse(user),
        success: true,
      };
    } catch (error) {
      return createError({
        statusCode: 500,
        statusMessage: `${error}`,
      });
    }
  }
);
