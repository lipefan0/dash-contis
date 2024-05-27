import NextAuth from "next-auth";
import { authOptions } from "@/app/api/auth/authOptions";

const handler = NextAuth(authOptions);

// Export named handlers for each HTTP method
export { handler as GET, handler as POST };
