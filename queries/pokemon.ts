import {
  catchError,
  forkJoin,
  from,
  lastValueFrom,
  mergeMap,
  throwError,
} from "rxjs";

const baseUrlPokemon = "https://pokeapi.co/api/v2/";
const request = (url: string) => from(fetch(url).then((res) => res.json()));

export const getAllPokemonUrl = () => {
  const url = baseUrlPokemon + "pokemon?limit=12&offset=0";

  const obs$ = from(fetch(url)).pipe(
    mergeMap((response: Response) => {
      return response.json();
    }),
    catchError((error: Error) => {
      return throwError(() => new Error(error.message));
    })
  );

  return lastValueFrom(obs$);
};

export const getAllPokemon = async () => {
  const pokemonUrl = from(getAllPokemonUrl());

  const obs$ = from(
    pokemonUrl.pipe(
      mergeMap((response) =>
        forkJoin(response.results.map((el: any) => request(el.url)))
      ),
      catchError((error: Error) => {
        return throwError(() => new Error(error.message));
      })
    )
  );

  return lastValueFrom(obs$);
};
