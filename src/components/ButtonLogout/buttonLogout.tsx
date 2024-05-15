"use client";

import { signOut } from "next-auth/react";

export default function ButtonLogou() {
  return (
    <>
      <button
        className="bg-white rounded-lg text-slate-950 font-bold py-3 px-6 hover:bg-slate-100"
        onClick={() => signOut()}
      >
        Sair
      </button>
    </>
  );
}
