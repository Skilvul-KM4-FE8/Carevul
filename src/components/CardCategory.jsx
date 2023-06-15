import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./../styles/category-doctor.css";

function CardCategory() {
  const [cards, setCard] = useState([])

  useEffect(() => {
    axios(
      "https://648927875fa58521caaf3d93.mockapi.io/category-doctor"
    ).then(result => setCard(result.data))
  }, [])

  return (
    <>
            {cards.map(item => (
                <Col md={{ span: 3, offset: 0 }} key={item.id} id="col-card">
                  <div>
                    <Card className="card" id="card">
                      <div id="gradient-bg"></div>
                      <Card.Img src={item.image} id="card-category-image"/>
                      <Card.Title className="card-category-title">{item.category}</Card.Title>
                    </Card>
                  </div>
                </Col>
            ))}

    </>
  )
}

export default CardCategory;