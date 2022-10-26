import { useSession } from 'next-auth/react';

import NextAuth from 'next-auth/next';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// https://stackoverflow.com/questions/70409219/get-user-id-from-session-in-next-auth-client

// callbacks: {
//   session: async ({ session, token }) => {
//     if (session?.user) {
//       session.user.id = token.uid;
//     }
//     return session;
//   },
//   jwt: async ({ user, token }) => {
//     if (user) {
//       token.uid = user.id;
//     }
//     return token;
//   },
// },
// session: {
//   strategy: 'jwt',
// },
// ...
// });

// jwt
export default NextAuth({
  // callbacks: {
  //   session: async ({ session, token }) => {
  //     // console.log("token: ",token)
  //     if (session?.user) {
  //       session.user.id = token.uid;
  //     }
  //     return session;
  //   },
  // },
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      //@ts-ignore
      clientId: process.env.GITHUB_ID,
      //@ts-ignore
      clientSecret: process.env.GITHUB_SECRET,
    }),
    FacebookProvider({
      //@ts-ignore
      clientId: process.env.FACEBOOK_ID,
      //@ts-ignore
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    GoogleProvider({
      //@ts-ignore
      clientId: process.env.GOOGLE_ID,
      //@ts-ignore
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  secret: process.env.NEXT_PUBLIC_SECRET,
});
