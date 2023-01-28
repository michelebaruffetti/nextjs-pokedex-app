import { FC } from "react";
import { Button, Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import PokemonCard from "./PokemonCard";

const PokemonSection: FC<{ allPokemon: any }> = ({ allPokemon }) => {
  return (
    <Container>
      <Row xs={1} md={2} lg={3} xl={4} xxl={5} className="g-2">
        {allPokemon.map((el: any) => (
          <Col className="d-flex">
            <PokemonCard singlePokemon={el} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PokemonSection;
