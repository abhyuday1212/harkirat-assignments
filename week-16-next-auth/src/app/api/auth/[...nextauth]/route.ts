import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "email" },
        password: {
          label: "password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials: any) {
        //   ------------ DB Logic
        /*
          
        const username = credentials.username;
        const password = credentials.password;

        const user = await prisma.user.findOne({
          where: {
            email: username,
            password: password,
          },
        });

        if (!user) {
          return null;
        }
          */
          
          //   --------------------------
          
          console.log(credentials);

          return {
              id: "user1",
              mame: "abhyuday",
              email: "xyz"
        };
      },
    }),
  ],
});

export const GET = handler;
export const POST = handler;
