import { FC } from "react";
import { Button, Card } from "react-bootstrap";
import { typecolors } from "../utils/typecolors";
import { PokemonDetail } from "../models/models";
import styles from "../styles/PokemonCard.module.scss";

const PokemonCard: FC<{ singlePokemon: PokemonDetail }> = ({
  singlePokemon,
}) => {
  return (
    <Card className="flex-fill p-3">
      <div className="d-flex justify-content-between">
        <p style={{ margin: "0", fontSize: "18px" }}>#{singlePokemon.id}</p>

        <div className={styles.pokeballContainer}>
          <img
            src="/pokeball.svg"
            alt="Pokeball"
            className={styles.pokeballImage}
          />
        </div>
      </div>
      <Card.Img
        variant="top"
        src={
          singlePokemon?.sprites.other.dream_world.front_default ??
          singlePokemon?.sprites.other.home.front_default ??
          singlePokemon?.sprites.versions.generation_v?.black_white
            .front_default ??
          singlePokemon?.sprites.front_default ??
          "/pokeball.svg"
        }
        style={{ height: "200px" }}
      />
      <Card.Body>
        <Card.Title className="ms-1">
          {singlePokemon?.name?.toUpperCase()}
        </Card.Title>
        {/* <Card.Text> */}
        <div className="my-2">
          {singlePokemon?.types!.map((type, index: number) => {
            return (
              <p
                key={index + Date.now()}
                className="card-text btn m-0 me-2 mb-1 fs-6 text-uppercase text-white"
                style={{
                  backgroundColor:
                    typecolors[type.type.name as keyof typeof typecolors],
                }}
              >
                {type.type.name}
              </p>
            );
          })}
        </div>
        {/* </Card.Text> */}
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
};

export default PokemonCard;
