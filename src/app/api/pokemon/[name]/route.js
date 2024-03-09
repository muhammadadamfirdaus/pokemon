import { NextResponse } from "next/server";

const source = `${process.env.NEXT_PUBLIC_API}/pokemon/`;

export async function GET(req, res) {
  const response = await fetch(`${source}/${res.params.name}`);
  const dataPokemon = await response.json();
  // console.log(res.params.name);

  return NextResponse.json(dataPokemon);
}
