"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function LoginPage() {
  const searchParams = useSearchParams();

  const errorLogin = searchParams.get("error");

  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    signIn("credentials", {
      ...data,
      callbackUrl: "/dashboard",
    });
  }

  return (
    <form onSubmit={login}>
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
      <button
        className="bg-blue-600 mt-4 rounded-xl py-2 px-10 text-white"
        type="submit"
      >
        Login
      </button>
      {errorLogin === "CredentialsSignin" && (
        <div className="text-red-400 mt-4">
          Usuário ou senha esta errado, tente novamente
        </div>
      )}
    </form>
  );
}
