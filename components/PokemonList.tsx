import { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PokemonCard from "./PokemonCard";
import { PokemonDetail } from "../models/models";

const PokemonList: FC<{ allPokemon: PokemonDetail[] | undefined }> = ({
  allPokemon,
}) => {
  return (
    <Container className="mb-4">
      <Row xs={1} md={2} lg={3} xl={4} xxl={5} className="g-2">
        {allPokemon?.map((el) => (
          <Col className="d-flex" key={el?.id}>
            <PokemonCard singlePokemon={el} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PokemonList;
