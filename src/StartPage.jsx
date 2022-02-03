import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function StartPage() {
  return <>
    <Container>
      <Row>
        <Col md={{ span: 8, offset: 2 }} className="mt-5">
          <h1>Welcome!</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore praesentium explicabo eligendi illo quae recusandae iure odio excepturi culpa veritatis expedita veniam minus, velit cupiditate quam porro dicta? Ipsam, porro?</p>
          <p>Ipsum eos corrupti iste placeat delectus, voluptatem minima qui alias dolore modi repellendus quae eaque fugit ipsam atque odit molestias cum veritatis architecto eveniet. Excepturi culpa possimus eaque quod voluptas!</p>
          <p>Enim tenetur saepe fugit accusamus aliquam, odit quisquam distinctio illo laudantium ullam modi corporis quo consectetur officia iure quos qui repudiandae? Magni, assumenda facere. Voluptas nisi minus natus nesciunt rerum!</p>
        </Col>
      </Row>
    </Container>
  </>
}