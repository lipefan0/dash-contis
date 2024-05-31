"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

function LoginForm() {
  const searchParams = useSearchParams();
  const [errorLogin, setErrorLogin] = useState<string | null>(null);

  useEffect(() => {
    const error = searchParams.get("error");
    if (error) {
      setErrorLogin(error);
    }
  }, [searchParams]);

  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    signIn("credentials", {
      ...data,
      callbackUrl: "/adminpage",
    });
  }

  return (
    <form onSubmit={login} className="px-4">
      <label htmlFor="email">E-mail</label>
      <input
        className="rounded-xl bg-slate-100 py-1 px-2 w-full mb-4"
        type="email"
        name="email"
        placeholder="Email"
        required
      />
      <label htmlFor="password">Senha</label>
      <input
        className="rounded-xl bg-slate-100 py-1 px-2 w-full mb-4"
        type="password"
        name="password"
        placeholder="Password"
        required
      />
      <div className="flex flex-col">
        <button
          className="bg-[#081441] hover:bg-blue-950 mt-4 rounded-xl py-2 px-10 text-white"
          type="submit"
        >
          Login
        </button>
        <Link className="mt-4 hover:text-slate-400" href={"/"}>
          Logar na pagina cliente
        </Link>
      </div>
      {errorLogin === "CredentialsSignin" && (
        <div className="text-red-400 mt-4">
          Usuário ou senha está errado, tente novamente
        </div>
      )}
    </form>
  );
}

export default function LoginPageAdmin() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <LoginForm />
      </div>
    </Suspense>
  );
}
