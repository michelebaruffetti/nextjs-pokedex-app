import { FC } from "react";
import { Button, Card, CardGroup, Col, Container, Row } from "react-bootstrap";

const PokemonSection: FC<{ allPokemon: any }> = ({ allPokemon }) => {
  return (
    <Container>
      <Row xs={1} md={2} lg={3} xl={4} xxl={6} className="g-2">
        {allPokemon.map((el: any) => (
          <Col className="d-flex">
            <Card
              //   style={{ width: "18rem" }}
              key={el?.id}
              className="flex-fill"
            >
              <Card.Img
                variant="top"
                src={el?.sprites.other.dream_world.front_default}
              />
              <Card.Body>
                <Card.Title>{el?.name?.toUpperCase()}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PokemonSection;
