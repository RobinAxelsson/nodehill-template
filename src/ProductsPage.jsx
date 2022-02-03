import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function ProductPage({ products }) {
  return <>
    <Container>
      <Row>

        <h1 className="mt-5 mb-3">Products</h1>
        {products.map(({ id, name, price, description, image }) =>
          <Col sm={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 3 }} key={id}>
            <Card className="product-in-list mb-4">
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text className="description">
                  {description.slice(0, 100) + '...'}
                </Card.Text>
                <Card.Text>
                  Price: {price} SEK
                </Card.Text>
                <Button className="float-end" variant="primary">Details</Button>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </Container>
  </>
}