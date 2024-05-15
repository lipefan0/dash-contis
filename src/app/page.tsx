import LoginPage from "@/components/FormularioLogin/formularioLogin";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen grid grid-cols-2 items-center justify-center mx-6">
      <div className="flex items-center justify-center mx-4 py-4">
        <Image
          alt="Logo Contis"
          src="/LOGO-CONTIS.svg"
          width={500}
          height={500}
        />
      </div>
      <div className="h-4/5 flex items-center justify-center bg-white mx-4 py-4 border rounded-3xl">
        <LoginPage />
      </div>
    </div>
  );
}
