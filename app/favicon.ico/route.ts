import { NextResponse } from "next/server";

export function GET(request: Request) {
  return NextResponse.redirect(new URL("/logo/logoicon.png", request.url), 308);
}
