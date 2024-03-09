"use client";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";

export default function Pokemons({ name, pokemonID, url }) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["pokemon"],
    queryFn: () => fetch(`http://localhost:3000/api/pokemon/${name}`).then((res) => res.json()),
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;

  return (
    <>
      {isLoading ? (
        "loading......"
      ) : (
        <div className="md:basis-1/4 basis-full">
          <div className="rounded shadow-lg mx-4 my-4 px-4 py-4">
            <div className="w-full">{isLoading ? "Loading image..." : <Image className="hover:scale-125 transition ease duration-500" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonID}.png`} alt={name} width={200} height={200} />}</div>
            <h1 className="font-semibold capitalize text-center">{name}</h1>
          </div>
        </div>
      )}
    </>
  );
}
