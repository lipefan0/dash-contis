import NextAuth from "next-auth";
import { authOptions } from "@/auth/authOption";

const handler = (req, res) => NextAuth(req, res, authOptions);

export { handler as GET, handler as POST };
