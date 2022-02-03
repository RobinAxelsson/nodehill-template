import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer() {
  return <>
    <Container fluid className="bg-primary pt-3 text-center">
      <Row>
        <Col>
          <p>&copy; Thomas 2022</p>
        </Col>
      </Row>
    </Container>
  </>
}