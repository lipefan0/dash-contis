import DashboardClient from "@/components/DashboardClient/dashboardClient";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/authOptions";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
    return null;
  }

  console.log(session.user); // Verifique aqui se title e srcBI estão presentes

  return <DashboardClient session={session} />;
}
