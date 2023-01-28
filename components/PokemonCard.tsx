import { FC } from "react";
import { Button, Card } from "react-bootstrap";

const PokemonCard: FC<{ singlePokemon: any }> = ({ singlePokemon }) => {
  return (
    <Card
      //   style={{ width: "18rem" }}
      key={singlePokemon?.id}
      className="flex-fill p-3"
    >
      <Card.Img
        variant="top"
        src={singlePokemon?.sprites.other.dream_world.front_default}
        style={{ maxHeight: "200px" }}
      />
      <Card.Body>
        <Card.Title>{singlePokemon?.name?.toUpperCase()}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default PokemonCard;
