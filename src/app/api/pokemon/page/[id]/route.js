import { NextResponse } from "next/server";

export async function GET(req, res) {
  console.log(req);
  const source = `${process.env.NEXT_PUBLIC_API}/pokemon?limit=20&offset=${res.params.id}`;
  console.log(source);
  console.log(res);
  const response = await fetch(source);
  const dataPokemon = await response.json();

  return NextResponse.json(dataPokemon);
}
