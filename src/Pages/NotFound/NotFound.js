import { Card, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <section>
      <Container>
        <Card className="text-center">
          <Card.Header>Alert</Card.Header>
          <Card.Body>
            <Card.Title>Sorry!!!!!!!</Card.Title>
            <Card.Text>
              Nothing found according to your search...
            </Card.Text>
            <Link to='/' className="btn btn-primary">Go to Home</Link>
          </Card.Body>
          <Card.Footer className="text-muted">Bicycle Parts</Card.Footer>
        </Card>
      </Container>
    </section>
  )
}

export default NotFound;