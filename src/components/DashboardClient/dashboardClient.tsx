"use client";

import { useRef } from "react";
import Image from "next/image";
import ButtonLogou from "@/components/ButtonLogout/buttonLogout";
import PowerBI from "@/components/powerbi/powerbi";

interface DashboardClientProps {
  session: {
    user: {
      name: string;
      title?: string;
      srcBI?: string;
    };
  };
}

export default function DashboardClient({ session }: DashboardClientProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleFullScreen = () => {
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if ((iframe as any).mozRequestFullScreen) {
        // Firefox
        (iframe as any).mozRequestFullScreen();
      } else if ((iframe as any).webkitRequestFullscreen) {
        // Chrome, Safari and Opera
        (iframe as any).webkitRequestFullscreen();
      } else if ((iframe as any).msRequestFullscreen) {
        // IE/Edge
        (iframe as any).msRequestFullscreen();
      } else if ((iframe as any).webkitEnterFullscreen) {
        // iOS Safari
        (iframe as any).webkitEnterFullscreen();
      }
    }
  };

  return (
    <div className="bg-blue-600 h-screen">
      <div className="flex md:justify-between md:flex-row flex-col items-center">
        <div className="w-64 flex flex-col md:justify-between items-center md:h-[90vh] md:ml-8">
          <Image
            alt="Logo-Contis"
            src="/LOGO-CONTIS.svg"
            width={500}
            height={500}
          />
          <h1 className="text-white font-bold size-20">
            Dashboard {session.user.name}
          </h1>
          <div className="flex justify-between w-full">
            <ButtonLogou />
            <button
              className="rounded-md collapse sm:visible py-2 px-4 bg-green-500 text-white font-bold"
              onClick={handleFullScreen}
            >
              Tela Cheia
            </button>
          </div>
        </div>
        <div className="sm:hidden block mt-4">
          <p className="font-bold text-white size-8 w-full h-full">
            VIRE O CELULAR PARA VER O DASHBOARD
          </p>
        </div>
        <div className="h-[90%] w-[90%]">
          <PowerBI
            ref={iframeRef}
            title={session.user.name}
            src={session.user.srcBI}
          />
        </div>
      </div>
    </div>
  );
}
