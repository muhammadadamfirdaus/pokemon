"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function DetailPokemon({ pokemon, params }) {
  const router = useRouter();
  const {
    data: pokemonDetail,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["pokemons"],
    queryFn: () => fetch(`http://localhost:3000/api/pokemon/${params.name}`).then((res) => res.json()),
  });

  return (
    <>
      {isLoading ? (
        "loading......"
      ) : (
        <div>
          <div className="bg-slate-900 py-4">
            <button onClick={router.back}>
              <span className="text-white text-md font-medium px-8">Back</span>
            </button>
          </div>
          <div className="flex justify-center mx-4 my-4 px-4 py-4">
            <div className="flex basis-2/4 rounded shadow-lg px-4 py-4">
              {pokemonDetail.sprites === undefined || isLoading ? "Loading image..." : <Image src={pokemonDetail.sprites.front_default} width={320} height={320} alt={pokemonDetail.name} />}
              <div className="p-4">
                <h1 className="text-xl capitalize font-semibold mb-2">{pokemonDetail.name}</h1>
                <div className="flex">
                  <span className="mr-4 font-light">Species:</span>
                  <span className="capitalize">{pokemonDetail.species.name}</span>
                </div>
                <div className="flex">
                  <span className="mr-4 font-light">Type:</span>
                  <span className="capitalize">
                    {pokemonDetail.types.map((t, i) => {
                      return (
                        <span key={i} className="mr-2 after:content-[','] last:after:content-none">
                          {t.type.name}
                        </span>
                      );
                    })}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
