import type { GetServerSideProps, NextPage } from "next";
import Layout from "../components/common/Layout";
import { getAllPokemon } from "../queries/pokemon";
import PokemonList from "../components/PokemonList";

const Home: NextPage<{ allPokemon: any }> = ({ allPokemon }) => {
  return (
    <Layout>
      <PokemonList allPokemon={allPokemon} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await getAllPokemon();

  return { props: { allPokemon: res } };
};

export default Home;
