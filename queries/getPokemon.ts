const fetchPokemonDetails = async (url: string): Promise<PokemonDetail> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch details for Pokemon from URL: ${url}`);
  }

  const pokemonDetails: PokemonDetail = await response.json();

  return pokemonDetails;
};

export const getAllPokemon = async (
  url?: string
): Promise<{
  pokemonList: PokemonDetail[];
  pagination: PaginationData;
}> => {
  const apiUrl = url || "https://pokeapi.co/api/v2/pokemon?limit=12&offset=0";
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error(`Failed to fetch Pokemon data from URL: ${apiUrl}`);
  }

  const data: ResponsePokemonBase = await response.json();
  const pokemonList: PokemonDetail[] = await Promise.all(
    data.results.map((result) => fetchPokemonDetails(result.url))
  );

  const pagination: PaginationData = {
    totalCount: data.count,
    nextPage: data.next,
    prevPage: data.previous,
  };

  return { pokemonList, pagination };
};
