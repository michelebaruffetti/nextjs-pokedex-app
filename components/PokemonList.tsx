import { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PokemonCard from "./PokemonCard";

const PokemonList: FC<{ allPokemon: any }> = ({ allPokemon }) => {
  console.log({ allPokemon });

  return (
    <Container>
      <Row xs={1} md={2} lg={3} xl={4} xxl={5} className="g-2">
        {allPokemon.map((el: any) => (
          <Col className="d-flex" key={el?.id}>
            <PokemonCard singlePokemon={el} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PokemonList;
