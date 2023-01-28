import { FC } from "react";
import { Button, Card } from "react-bootstrap";
import { typecolors } from "../utils/typecolors";

const PokemonCard: FC<{ singlePokemon: any }> = ({ singlePokemon }) => {
  return (
    <Card className="flex-fill p-3">
      <Card.Img
        variant="top"
        src={singlePokemon?.sprites.other.dream_world.front_default}
        style={{ maxHeight: "200px" }}
      />
      <Card.Body>
        <Card.Title className="ms-1">
          {singlePokemon?.name?.toUpperCase()}
        </Card.Title>
        {/* <Card.Text> */}
        <div className="my-2">
          {singlePokemon?.types.map((type: any, index: number) => {
            return (
              <p
                key={index + Date.now()}
                className="card-text btn m-0 me-2 text-uppercase text-white"
                style={{ backgroundColor: (typecolors as any)[type.type.name] }}
              >
                {type.type.name}
              </p>
            );
          })}
        </div>
        {/* </Card.Text> */}
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default PokemonCard;
