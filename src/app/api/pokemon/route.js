import { NextResponse } from "next/server";

const source = `${process.env.NEXT_PUBLIC_API}/pokemon?limit=20`;

export async function GET() {
  const res = await fetch(source);
  const dataPokemon = await res.json();

  return NextResponse.json(dataPokemon);
}
