import type { GetServerSideProps, NextPage } from "next";
import Layout from "../components/common/Layout";
import PokemonList from "../components/PokemonList";
import { getAllPokemon } from "../queries/getPokemon";
import { dehydrate, QueryClient, useQueryClient } from "react-query";
import "bootstrap/dist/css/bootstrap.min.css";

interface HomeProps {
  dehydratedState: unknown;
}

const Home: NextPage<HomeProps> = ({ dehydratedState }) => {
  const queryClient = useQueryClient();
  const allPokemon = queryClient.getQueryData("allPokemon");

  return (
    <Layout>
      <PokemonList allPokemon={allPokemon} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("allPokemon", getAllPokemon);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Home;
