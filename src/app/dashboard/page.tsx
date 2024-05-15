import ButtonLogou from "@/components/ButtonLogout/buttonLogout";
import PowerBI from "@/components/powerbi/powerbi";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession();
  console.log(session?.user);

  if (!session) {
    redirect("/");
  }

  return (
    <div className="bg-blue-600 h-screen">
      <div className=" flex justify-between items-center">
        <div className="w-60 flex flex-col justify-between items-center h-[90vh]">
          <Image
            alt="Logo-Contis"
            src="/LOGO-CONTIS.svg"
            width={500}
            height={500}
          />
          <h1 className="text-white font-bold size-20">
            Dashboard {session?.user.name}
          </h1>
          <ButtonLogou />
        </div>
        <div className="h-[90%] w-[90%]">
          <PowerBI title={session?.user.name} />
        </div>
      </div>
    </div>
  );
}
