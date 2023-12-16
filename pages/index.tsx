import type { GetServerSideProps, NextPage } from "next";
import Layout from "../components/common/Layout";
import PokemonList from "../components/PokemonList";
import { getAllPokemon } from "../queries/getPokemon";
import { dehydrate, QueryClient, useQueryClient } from "react-query";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Pagination from "../components/Pagination";

const Home: NextPage = ({
  initialPokemonList,
  initialPagination,
}: {
  initialPokemonList?: PokemonDetail[];
  initialPagination?: PaginationData;
}) => {
  const queryClient = useQueryClient();
  const [pokemonList, setPokemonList] = useState(initialPokemonList);
  const [pagination, setPagination] = useState(initialPagination);

  const handleLoadMore = async () => {
    if (pagination?.nextPage) {
      const { pokemonList: newPokemonList, pagination: newPagination } =
        await getAllPokemon(pagination.nextPage);

      setPokemonList((prevPokemonList) => [
        ...(prevPokemonList ?? []),
        ...newPokemonList,
      ]);

      setPagination(newPagination);
    }
  };
  return (
    <Layout>
      <PokemonList allPokemon={pokemonList} />
      {pagination?.nextPage && <Pagination handleLoadMore={handleLoadMore} />}
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();
  const { pokemonList, pagination } = await getAllPokemon();

  await queryClient.prefetchQuery("allPokemon", () => getAllPokemon());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      initialPokemonList: pokemonList,
      initialPagination: pagination,
    },
  };
};

export default Home;
