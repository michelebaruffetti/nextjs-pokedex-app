import { useState, useEffect } from "react";

const STORAGE_KEY = "caught_pokemon";

export const usePokemonStorage = (pokemonId: number) => {
  const [isCaught, setIsCaught] = useState(false);

  useEffect(() => {
    const caughtPokemon = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    setIsCaught(caughtPokemon.includes(pokemonId));
  }, [pokemonId]);

  const toggleCatch = () => {
    const caughtPokemon = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

    if (isCaught) {
      const newCaughtPokemon = caughtPokemon.filter(
        (id: number) => id !== pokemonId
      );
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newCaughtPokemon));
    } else {
      const newCaughtPokemon = [...caughtPokemon, pokemonId];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newCaughtPokemon));
    }

    setIsCaught(!isCaught);
  };

  return { isCaught, toggleCatch };
};
