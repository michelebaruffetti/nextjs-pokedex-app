import { FC } from "react";

const PokemonSection: FC<{ allPokemon: any }> = ({ allPokemon }) => {
  return (
    <>
      {/* <Card.Group>
        {allPokemon.map((el: any) => (
          <Card key={el?.id}>
            <Image src={el?.sprites.other.dream_world.front_default} />
            <Card.Content>
              <Card.Header>{el?.name?.toUpperCase()}</Card.Header>
            </Card.Content>
          </Card>
        ))}
      </Card.Group> */}
    </>
  );
};

export default PokemonSection;
