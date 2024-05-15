import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      title: string;
      src: string;
    } & DefaultSession["user"]; // Inclui os campos padrão do usuário com campos personalizados
  }
}
