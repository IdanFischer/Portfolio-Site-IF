import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export default function Header() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <img
            src="https://picsum.photos/1400/300?random=1"
            alt="header"
            className="hero-image" />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Hello I'm a Software Enigneer</h1>
        </Col>
      </Row>
    </Container>
  )
}