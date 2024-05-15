import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  pages: {
    signIn: "/",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "jsmith@email.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          return null;
        }
        if (
          credentials.email === "felipe.fernandes@contis.com.br" &&
          credentials.password === "123"
        ) {
          return {
            id: "1",
            name: "GlobalK",
            email: "felipe.fernandes@contis.com.br",
            title: "MULTIPLIC FELIPE",
            srcBI:
              "https://app.powerbi.com/view?r=eyJrIjoiNWVhYTI3ZjUtYzU3Mi00MTRkLTg4MTMtZjY3OGZhMGVmNDY3IiwidCI6IjNlNTQyNjBlLTQyMGItNDgwMy1iZjlhLTVkMWEwYzgwYjUxMyJ9&pageName=ReportSection",
          };
        }

        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
