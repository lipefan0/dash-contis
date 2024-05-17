// src/app/dashboard/page.tsx
import DashboardClient from "@/components/DashboardClient/dashboardClient";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession();

  if (!session) {
    redirect("/");
    return null;
  }

  return <DashboardClient session={session} />;
}
