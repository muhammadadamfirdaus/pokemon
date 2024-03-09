import { NextResponse } from "next/server";

export async function GET(pageParam = 1) {
  const source = `${process.env.NEXT_PUBLIC_API}/pokemon?limit=20&offset=${pageParam}`;
  console.log(source);
  const res = await fetch(source);
  const dataPokemon = await res.json();

  return NextResponse.json(dataPokemon);
}
