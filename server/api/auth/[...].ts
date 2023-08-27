// file: ~/server/api/auth/[...].ts
import CredentialProvider from 'next-auth/providers/credentials';
import { compareSync } from 'bcrypt';
import { NuxtAuthHandler } from '#auth';
import { User } from '~~/server/api/users/user.model';
import { authUserResponse } from '~~/server/utils/authUser.response';

const config = useRuntimeConfig();
interface IUserSession {
  email: string;
  name?: string;
}

// async function (req, res) {
//   const { error } = req.query;
//   const redirectUrl = `/?error=${error}`;
//   res.redirect(redirectUrl);
// }

export default NuxtAuthHandler({
  secret: config.jwtAccessSecret,
  pages: {
    signIn: '/admin/login',
  },

  callbacks: {
    // @ts-ignore
    // async redirect({ url, baseUrl }) {
    //   // Allows relative callback URLs
    //   if (url.startsWith('/')) return `${baseUrl}${url}`;
    //   // Allows callback URLs on the same origin
    //   else if (new URL(url).origin === baseUrl) return url;
    //   return baseUrl;
    // },
    async signIn({ user, account, profile, email, credentials }) {
      const userDb = await User.findOne({ email: credentials?.email });
      if (!userDb) {
        return createError({
          statusMessage: '111',
          status: 400,
        });
      }
    },
  },
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialProvider.default({
      name: 'Credentials',

      credentials: {},
      async authorize(
        credentials: any,
        req: any
      ): Promise<IUserSession | null> {
        if (!credentials.username || !credentials.password) {
          return null;
        }
        const user = await User.findOne({ email: credentials.username });
        if (!user) {
          return null;
        }
        const isPasswordCorrect = compareSync(
          credentials.password,
          user.password
        );
        if (!isPasswordCorrect) {
          return null;
        }

        // setCookie(req.event, 'user', JSON.stringify(authUserResponse(user)), {
        //   httpOnly: true,
        //   sameSite: true,
        // });
        return user;
      },
    }),
  ],
});
