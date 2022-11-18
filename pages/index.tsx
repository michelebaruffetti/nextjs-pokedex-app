import type { GetServerSideProps, NextPage } from "next";
import { Card, Image } from "semantic-ui-react";
import { getAllPokemon } from "../queries/pokemon";

const Home: NextPage<{ allPokemon: any }> = ({ allPokemon }) => {
  console.log({ allPokemon });

  return (
    <>
      <Card.Group>
        {allPokemon.map((el: any) => (
          <Card key={el?.id}>
            <Image src={el?.sprites.other.dream_world.front_default} />
            <Card.Content>
              <Card.Header>{el?.name?.toUpperCase()}</Card.Header>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await getAllPokemon();

  return { props: { allPokemon: res } };
};

export default Home;
