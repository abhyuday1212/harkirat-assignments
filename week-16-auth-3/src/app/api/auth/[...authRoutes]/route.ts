import { NextRequest, NextResponse } from "next/server";

/*
 arg:any
 console.log(arg)
*/

export function GET(req: NextRequest, arg: any) {
  console.log(arg.params.authRoutes);

  return NextResponse.json({
    message: "GET request to /api/auth....aur btao kaise ho",
  });
}

export function POST() {
  return NextResponse.json({
    message: "lkcneknrmn",
  });
}
