// import type { NextAuthOptions } from "next-auth";
// import { connectDB } from "./lib/mongodb";
// import { createduserFromAuth, findUserByEmail } from "./lib/user.service";
// import Credentials from "next-auth/providers/credentials";
// import Google from "next-auth/providers/google";
// import Facebook from "next-auth/providers/facebook";
// import bcrypt from "bcrypt";

// export const authConfig: NextAuthOptions = {
//   providers: [
//     Credentials({
//       async authorize(
//         credentials: { email?: string; password?: string } | undefined
//       ) {
//         if (!credentials?.email || !credentials.password) {
//           return null;
//         }

//         await connectDB();
//         const user = await findUserByEmail(credentials.email);

//         if (!user) {
//           return null;
//         }

//         const passwordMatch = await bcrypt.compare(
//           credentials.password as string,
//           user.password || ""
//         );

//         if (!passwordMatch) {
//           return null;
//         }

//           return {
//           id: user._id.toString(),
//           email: user.email,
//           name: user.username,
//           username: user.username,
//           phone: user.phone,
//           userRole: user.userRole,
//         };


//       },
//     }),

//     Google({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET,
//     }),
//     Facebook({
//       clientId: process.env.FACEBOOK_ID,
//       clientSecret: process.env.FACEBOOK_SECRET,
//     }),
//   ],
//   pages: {
//     signIn: "/auth/signin",
//     signOut: "/auth/signout",
//   },
//   callbacks: {
//     async jwt({ token, user, account }) {
//       if (user) {
//         token.id = user.id;
//         token.email = user.email;
//         token.name = user.name;
//         token.phone = (user as any).phone;
//         token.username = (user as any).username;
//       }

//       if (account?.provider === "google" || account?.provider === "facebook") {
//         await connectDB();
//         const existingUser = await findUserByEmail(token.email!);

//         if (!existingUser) {
//           const newUser = await createduserFromAuth({
//             email: token.email!,
//             username: user?.name || token.email!.split("@")[0],
//             provider: account.provider,
//             userRole: "user",
//           });

//           token.id = newUser._id.toString();
//           token.username = newUser.username;
//         } else {
//           token.id = existingUser._id.toString();
//           token.username = existingUser.username;
//         }
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (session.user) {
//         session.user.id = token.id as string;
//         session.user.email = token.email;
//         (session.user as any).phone = token.phone;
//         (session.user as any).username = token.username;
//       }
//       return session;
//     },
//   },
//   secret: process.env.NEXTAUTH_SECRET,
//   session: {
//     strategy: "jwt",
//     maxAge: 30 * 24 * 60 * 60,
//   },
// };




// import type { NextAuthOptions } from "next-auth";
// import { connectDB } from "./lib/mongodb";
// import { createduserFromAuth, findUserByEmail } from "./lib/user.service";
// import Credentials from "next-auth/providers/credentials";
//  
// import bcrypt from "bcrypt";

// export const authConfig: NextAuthOptions = {
//   providers: [
//     Credentials({
//       async authorize(
//         credentials: { email?: string; password?: string } | undefined
//       ) {
//         if (!credentials?.email || !credentials.password) {
//           return null;
//         }

//         await connectDB();
//         const user = await findUserByEmail(credentials.email);

//         if (!user) {
//           return null;
//         }

//         const passwordMatch = await bcrypt.compare(
//           credentials.password as string,
//           user.password || ""
//         );

//         if (!passwordMatch) {
//           return null;
//         }

//         return {
//           id: user._id,
//           email: user.email,
//           name: user.username,
//           username: user.username,
//           phone: user.phone,
//           userRole: user.userRole,
//         };
//       },
//     }),

//     Google({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET,
//     }),
//     Facebook({
//       clientId: process.env.FACEBOOK_ID,
//       clientSecret: process.env.FACEBOOK_SECRET,
//     }),
//   ],
//   pages: {
//     signIn: "/auth/signin",
//     signOut: "/auth/signout",
//   },
//   callbacks: {
//     async jwt({ token, user, account }) {
//       if (user) {
//         token.id = user.id;
//         token.email = user.email;
//         token.name = user.name;
//         token.phone = (user as any).phone;
//         token.username = (user as any).username;
//       }

//       if (account?.provider === "google" || account?.provider === "facebook") {
//         await connectDB();
//         const existingUser = await findUserByEmail(token.email!);

//         if (!existingUser) {
//           const newUser = await createduserFromAuth({
//             email: token.email!,
//             username: user?.name || token.email!.split("@")[0],
//             provider: account.provider,
//             userRole: "user",
//           });

//           token.id = newUser._id.toString();
//           token.username = newUser.username;
//         } else {
//           token.id = existingUser._id.toString();
//           token.username = existingUser.username;
//         }
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (session.user) {
//         session.user.id = token.id as string;
//         session.user.email = token.email;
//         (session.user as any).phone = token.phone;
//         (session.user as any).username = token.username;
//       }
//       return session;
//     },
//   },
//   secret: process.env.NEXTAUTH_SECRET,
//   session: {
//     strategy: "jwt",
//     maxAge: 30 * 24 * 60 * 60,
//   },
// };



import type { NextAuthOptions } from "next-auth";
import { connectDB } from "./lib/mongodb";
import { createduserFromAuth, findUserByEmail } from "./lib/user.service";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
import bcrypt from "bcrypt";

export const authConfig: NextAuthOptions = {
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "text", placeholder: "you@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        await connectDB();
        const user = await findUserByEmail(credentials.email);

        if (!user) return null;

        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.password || ""
        );

        if (!passwordMatch) return null;

        // ensure id is a string to satisfy NextAuth User type
        return {
          id: user._id.toString(),
          email: user.email,
          name: user.username,
          username: user.username,
          phone: user.phone,
          userRole: user.userRole,
        } as any;
      },
    }),

    Google({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
    Facebook({
      clientId: process.env.FACEBOOK_ID || "",
      clientSecret: process.env.FACEBOOK_SECRET || "",
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signup",
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        (token as any).id = (user as any).id;
        (token as any).email = (user as any).email;
        (token as any).name = (user as any).name;
        (token as any).phone = (user as any).phone;
        (token as any).username = (user as any).username;
      }

      if (account?.provider === "google" || account?.provider === "facebook") {
        await connectDB();
        const existingUser = await findUserByEmail((token as any).email);

        if (!existingUser) {
          const newUser = await createduserFromAuth({
            email: (token as any).email,
            username: (user as any)?.name || ((token as any).email || "").split("@")[0],
            provider: account.provider,
            userRole: "user",
          });

          (token as any).id = newUser._id.toString();
          (token as any).username = newUser.username;
        } else {
          (token as any).id = existingUser._id.toString();
          (token as any).username = existingUser.username;
        }
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = (token as any).id as string;
        session.user.email = (token as any).email;
        (session.user as any).phone = (token as any).phone;
        (session.user as any).username = (token as any).username;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
};