"use client";

import { useState } from "react";
import Link from "next/link";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Pokemons from "./pokemon/page";

export default function Home() {
  const [page, setPage] = useState(1);

  const {
    data: pokemons,
    error,
    isLoading,
    isFetching,
    isPreviousData,
  } = useQuery({
    queryKey: ["/pokemon", page],
    queryFn: () => fetch(`http://localhost:3000/api/pokemon/page/${page}`).then((res) => res.json()),
    keepPreviousData: true,
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;

  const lastPage = () => setPage(pokemons.results.length);
  const firstPage = () => setPage(1);
  const pagesArray = Array(pokemons.results.length)
    .fill()
    .map((_, index) => index + 1);

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {pokemons.results?.map((pokemon, i) => {
          const url = pokemon.url;
          const getID = url.split("/").slice(-2);
          const pokemonID = getID[0];
          // console.log(pokemon.url, getID);
          return (
            <>
              <Link key={i} href={`/pokemon/${pokemon.name}`}>
                <Pokemons name={pokemon.name} url={pokemon.url} pokemonID={pokemonID} />
              </Link>
            </>
          );
        })}
      </div>
      {/* <Pagination /> */}
      <div className="flex flex-wrap justify-center py-8">
        <button className="p-2 border border-black" onClick={firstPage} disabled={isPreviousData || page === 1}>
          &lt;&lt;
        </button>
        {pagesArray.map((pg) => (
          <button className="p-2 border border-black" onClick={() => setPage(pg)}>
            {pg}
          </button>
        ))}
        <button className="p-2 border border-black" onClick={lastPage} disabled={isPreviousData || page === pokemons.results.length}>
          &gt;&gt;
        </button>
      </div>
    </>
  );
}
