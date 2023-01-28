import type { GetServerSideProps, NextPage } from "next";
import Layout from "../components/common/Layout";
import PokemonSection from "../components/PokemonSection";
import { getAllPokemon } from "../queries/pokemon";

const Home: NextPage<{ allPokemon: any }> = ({ allPokemon }) => {
  return (
    <Layout>
      <PokemonSection allPokemon={allPokemon} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await getAllPokemon();

  return { props: { allPokemon: res } };
};

export default Home;
