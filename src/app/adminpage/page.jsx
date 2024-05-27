import DashboardCard from "@/components/DashboardsCards/dashboardsCards";
import { getServerSession } from "next-auth/next";
import { adminAuthOptions } from "@/app/api/auth/authOptions";
import { redirect } from "next/navigation";

const authorizedEmail = "alan@contis.com.br"; // substitua pelo email do usuário autorizado

export default async function AdminPage() {
  const session = await getServerSession(adminAuthOptions);

  if (!session || session.user.email !== authorizedEmail) {
    redirect("/");
    return null;
  }

  return (
    <div className="mx-auto">
      <div className="grid grid-cols-5 justify-stretch mx-6 my-4">
        <DashboardCard
          linkBI="https://app.powerbi.com/view?r=eyJrIjoiOTI2NGMxMTEtYTE4NS00ZjM5LTg1MzEtZDVkMDY3Njk2Mzg0IiwidCI6IjNlNTQyNjBlLTQyMGItNDgwMy1iZjlhLTVkMWEwYzgwYjUxMyJ9&pageName=ReportSection1170ae11de1564156d99"
          title="GlogalK-v2"
          description="Descrição"
          img="/image-cards/globalk.png"
          altImg="GlobalK"
        />
        <DashboardCard
          linkBI="https://app.powerbi.com/view?r=eyJrIjoiNWVhYTI3ZjUtYzU3Mi00MTRkLTg4MTMtZjY3OGZhMGVmNDY3IiwidCI6IjNlNTQyNjBlLTQyMGItNDgwMy1iZjlhLTVkMWEwYzgwYjUxMyJ9&pageName=ReportSection"
          title="GlogalK-v1"
          description="Descrição"
          img="/image-cards/globalk.png"
          altImg="GlobalK"
        />
        <DashboardCard
          linkBI="https://www.google.com"
          title="GlogalK"
          description="Descrição"
          img="/image-cards/globalk.png"
          altImg="GlobalK"
        />
        {/* Adicione mais DashboardCards conforme necessário */}
      </div>
    </div>
  );
}
