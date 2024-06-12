import DashboardCard from "@/components/DashboardsCards/dashboardsCards";
import { getServerSession } from "next-auth/next";
import { adminAuthOptions } from "@/app/api/auth/authOptions";
import { redirect } from "next/navigation";
import Image from "next/image";
import ButtonLogout from "@/components/ButtonLogout/buttonLogout";
import prisma from "@/lib/prisma"; // ajuste o caminho conforme necessário

// Lista de e-mails autorizados
const authorizedEmails = [
  "alan@contis.com.br",
  "felipe.fernandes@contis.com.br",
  "amanda.calheiros@contis.com.br",
]; // substitua pelos e-mails dos usuários autorizados

export default async function AdminPage() {
  const session = await getServerSession(adminAuthOptions);

  // Verificação de múltiplos e-mails autorizados
  if (!session || !authorizedEmails.includes(session.user.email)) {
    redirect("/");
    return null;
  }

  // Buscar os dados dos cartões do dashboard no banco de dados
  const dashboardCards = await prisma.DashboardCard.findMany();

  return (
    <div>
      <div className="pr-10 pt-4">
        <div className="flex justify-between">
          <Image
            width={300}
            height={200}
            src="/LOGO-CONTIS.svg"
            alt="Logo Contis"
          />
          <ButtonLogout className="mr-4" />
        </div>
      </div>

      <div className="grid grid-cols-4">
        {dashboardCards.map((card) => (
          <DashboardCard
            key={card.id}
            linkBI={card.linkBI}
            title={card.title}
            img={card.img}
            altImg={card.altImg}
            status={card.status}
          />
        ))}
      </div>
    </div>
  );
}
