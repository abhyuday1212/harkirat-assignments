import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextResponse) {
  const user = await prisma.user.findFirst();

  return NextResponse.json({
    email: user?.username,
    name: "Abhyuday",
  });
}

export async function POST(req: NextRequest) {
  //extract the body
  const body = await req.json();

  console.log(body);

  // -----------------------
  console.log(req.headers.get("authorization"));

  console.log(req.nextUrl.searchParams.get("name"));

  // hit the database with username, password

  const user = await prisma.user.create({
    data: {
      username: body.username,
      password: body.password,
    },
  });

  console.log(user.id);

  return NextResponse.json({
    message: "You are signed up",
  }); 
}
