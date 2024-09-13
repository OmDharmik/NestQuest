import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { prisma } from './prisma'; // Adjust the import path as needed
import { PrismaAdapter } from '@auth/prisma-adapter';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  adapter: PrismaAdapter(prisma), // Use the correct adapter here
  session: {
    strategy: 'database',
  },
  // ...other NextAuth configuration
});
