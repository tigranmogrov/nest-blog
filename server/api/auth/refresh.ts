import { H3Event } from 'h3';

export default defineEventHandler(async (event: H3Event): Promise<any> => {
  try {
    const refreshToken: string | undefined = getCookie(event, 'refresh_token');
    if (!refreshToken) {
      return createError({
        statusCode: 400,
        statusMessage: 'refresh token is required',
      });
    } else {
      console.log('false');
    }
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage: `${error}`,
    });
  }
});
