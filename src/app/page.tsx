import LoginPage from "@/components/FormularioLogin/formularioLogin";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen grid md:grid-cols-2 items-center justify-center md:mx-6">
      <div className="flex items-center justify-center md:mx-4 md:py-4">
        <Image
          alt="Logo Contis"
          src="/LOGO-CONTIS.svg"
          width={500}
          height={500}
          className="md:w-[1200px] w-56"
        />
      </div>
      <div className="h-4/5 flex items-center justify-center bg-white mx-4 py-4 border rounded-3xl">
        <LoginPage />
      </div>
    </div>
  );
}
