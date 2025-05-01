import { FC } from "react";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { typecolors } from "../utils/typecolors";
import { PokemonDetail } from "../models/models";
import styles from "../styles/PokemonCard.module.scss";
import { usePokemonStorage } from "../hooks/usePokemonStorage";

const PokemonType: FC<{ type: string }> = ({ type }) => (
  <span
    className="card-text btn m-0 me-2 mb-1 fs-6 text-uppercase text-white"
    style={{
      backgroundColor: typecolors[type as keyof typeof typecolors],
    }}
  >
    {type}
  </span>
);

const PokemonCard: FC<{ singlePokemon: PokemonDetail }> = ({
  singlePokemon,
}) => {
  const { isCaught, toggleCatch } = usePokemonStorage(singlePokemon.id);

  const getPokemonImage = () => {
    const imageSources = [
      singlePokemon?.sprites.other.dream_world.front_default,
      singlePokemon?.sprites.other.home.front_default,
      singlePokemon?.sprites.versions.generation_v?.black_white.front_default,
      singlePokemon?.sprites.front_default,
    ];

    return imageSources.find((src) => src) || "/pokeball.svg";
  };

  return (
    <Card
      className={`flex-fill p-3 ${styles.pokemonCard}`}
      role="article"
      aria-label={`Pokemon ${singlePokemon.name}`}
    >
      <div className="d-flex justify-content-between">
        <p style={{ margin: "0", fontSize: "18px" }}>#{singlePokemon.id}</p>

        <OverlayTrigger
          placement="top"
          overlay={
            <Tooltip id={`tooltip-${singlePokemon.id}`}>
              {isCaught ? "Rilascia" : "Cattura"}
            </Tooltip>
          }
        >
          <div
            className={styles.pokeballContainer}
            onClick={(e) => {
              e.stopPropagation();
              toggleCatch();
            }}
          >
            <img
              src="/pokeball.svg"
              alt={isCaught ? "Rilascia Pokemon" : "Cattura Pokemon"}
              className={`${styles.pokeballImage} ${
                isCaught ? styles.caught : ""
              }`}
            />
          </div>
        </OverlayTrigger>
      </div>
      <Card.Img
        variant="top"
        src={getPokemonImage()}
        style={{ height: "200px" }}
        loading="lazy"
        alt={`${singlePokemon.name} artwork`}
      />
      <Card.Body>
        <Card.Title className="ms-1">
          {singlePokemon?.name?.toUpperCase()}
        </Card.Title>
        <div className="my-2">
          {singlePokemon?.types!.map((type, index: number) => (
            <PokemonType
              key={`${type.type.name}-${index}`}
              type={type.type.name}
            />
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default PokemonCard;
