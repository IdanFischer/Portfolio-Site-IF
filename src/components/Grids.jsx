import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import portfolios from "../data/griddata.json"


export default function Grids() {
  return (
    <Container>
      <Row>
        {
          portfolios.map(
            portfolio => {
              return (
                <Col key={portfolio.id} sm={12} md={6} lg={4} xl={2}>
                  <Card>

                    <Card.Img src={portfolio.image} alt="" />

                    <Card.Body>
                      <Card.Title>{portfolio.name}</Card.Title>
                      <Card.Text>{portfolio.description}</Card.Text>
                    </Card.Body>

                  </Card>
                </Col>
              )
            }
          )
        }
      </Row>
    </Container>
  )
}