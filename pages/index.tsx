import type { GetServerSideProps, NextPage } from "next";
import { getAllPokemon } from "../queries/pokemon";

const Home: NextPage<{ allPokemon: any }> = ({ allPokemon }) => {
  console.log({ allPokemon });

  return <>test</>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await getAllPokemon();

  return { props: { allPokemon: res } };
};

export default Home;
