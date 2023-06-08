import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./../styles/article-home.css";
import { Link } from "react-router-dom";

function Cardticle() {
  const [cards, setCard] = useState([])

  useEffect(() => {
    axios(
      "https://6480432af061e6ec4d48ebcc.mockapi.io/article-home"
    ).then(result => setCard(result.data))
  }, [])

  return (
    <>
      {/* <section id="card" className="article-card">
        <Container fluid>
          <Row> */}
            {cards.map(item => (
                <Col sm={4} key={item.id}>
                  <div>
                    <Card>
                      <Card.Img variant="top" src={item.img} />
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.desc}</Card.Text>
                        <a href={item.link} className="btn btn-primary">
                          Baca Selengkapnya
                        </a>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
            ))}
          {/* </Row>
        </Container>
      </section> */}
    </>
  )
}

export default Cardticle;
