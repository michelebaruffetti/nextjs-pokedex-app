import { Button, Col, Container, Row } from "react-bootstrap";

const Pagination = ({ handleLoadMore }: { handleLoadMore: () => void }) => {
  return (
    <Container className="mb-4">
      <Row>
        <Col>
          <Button
            size="lg"
            variant="outline-primary"
            onClick={() => handleLoadMore()}
          >
            Load More
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Pagination;
