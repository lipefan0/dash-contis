import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: int;
    email: string;
    name: string;
    title: string;
    srcBI: string;
  }

  interface Session {
    user: {
      id: int;
      email: string;
      name: string;
      title: string;
      srcBI: string;
    };
  }

  interface JWT {
    id: int;
    email: string;
    name: string;
    title: string;
    srcBI: string;
  }
}
