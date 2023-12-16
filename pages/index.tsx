import type { GetServerSideProps, NextPage } from "next";
import Layout from "../components/common/Layout";
import PokemonList from "../components/PokemonList";
import { getAllPokemon } from "../queries/getPokemon";
import { dehydrate, QueryClient, useQueryClient } from "react-query";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import { PaginationData, PokemonDetail } from "../models/models";
import styles from "../styles/Home.module.scss";

const Home: NextPage = ({
  initialPokemonList,
  initialPagination,
}: {
  initialPokemonList?: PokemonDetail[];
  initialPagination?: PaginationData;
}) => {
  const [pokemonList, setPokemonList] = useState(initialPokemonList);
  const [pagination, setPagination] = useState(initialPagination);
  const [loading, setLoading] = useState(true);

  const handleLoadMore = async () => {
    if (pagination?.nextPage) {
      setLoading(true);
      const { pokemonList: newPokemonList, pagination: newPagination } =
        await getAllPokemon(pagination.nextPage);

      //workaround to make appear and disappear the loader in a time useful to see it
      //without making flash - usually not necessary since the API are not so fast
      //but here happens often!
      const delay = new Promise((resolve) => setTimeout(resolve, 500));
      await delay;

      setPokemonList((prevPokemonList) => [
        ...(prevPokemonList ?? []),
        ...newPokemonList,
      ]);

      setPagination(newPagination);
    }
  };

  useEffect(() => {
    setLoading(false);
  }, [pokemonList]);

  return (
    <Layout>
      {loading && (
        <div className={styles.overlay}>
          <div className={styles["spinner-container"]}>
            <div
              className={`spinner-border text-primary ${styles["custom-spinner"]}`}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      )}
      <PokemonList allPokemon={pokemonList} />
      {pagination?.nextPage && <Pagination handleLoadMore={handleLoadMore} />}
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();
  const { pokemonList, pagination } = await getAllPokemon();

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      initialPokemonList: pokemonList,
      initialPagination: pagination,
    },
  };
};

export default Home;
