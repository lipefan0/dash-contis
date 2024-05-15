import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request) {
  try {
    const users = await prisma.user.findMany({
      include: {
        accesses: true,
      },
    });
    console.log("Fetched users:", users); // Log dos usuários obtidos
    return NextResponse.json(users);
  } catch (error) {
    console.error("Error fetching users:", error); // Log detalhado do erro
    return NextResponse.json(
      { error: `Error fetching users: ${error.message}` },
      { status: 500 }
    );
  }
}

// Remova a linha 'export const runtime = 'edge';'
// Se estiver presente, remova o runtime edge.
