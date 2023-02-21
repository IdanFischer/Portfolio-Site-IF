import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export default function Trident() {
  return (

    <Container className="trident">
      <Row className="bg-danger about-me">
        <Col>
          <h2>3 Things About Me</h2>
        </Col>
      </Row>

      <Row className="bg-success the-three">
        <Col sm={12} md={4} lg={4}>
        <img src="/images/hp-icon-1.png" alt="ideas" />
        <h3>Ideas</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione quisquam quae optio fugiat! Fuga mollitia illo quod voluptate a neque, quae tempore consequuntur ea rem possimus, inventore, optio sit voluptatem.</p>
        </Col>

        <Col sm={12} md={4} lg={4}>
        <img src="/images/hp-icon-2.png" alt="graph" />
        <h3>Graph</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id mollitia nisi illo labore optio, nemo, vero voluptatibus itaque iusto perspiciatis nam non dolore deleniti aliquam officia. Dolores, alias? Eaque, impedit!</p>
        </Col>

        <Col sm={12} md={4} lg={4}>
        <img src="/images/hp-icon-3.png" alt="shield" />
        <h3>Shield</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum praesentium alias eum perferendis doloremque cupiditate ipsam fugiat eveniet dolores, ratione error sed natus possimus nobis? Debitis perspiciatis unde dolores enim?</p>
        </Col>
      </Row>
    </Container>

  )
}