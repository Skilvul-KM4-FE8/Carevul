import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./../../styles/article-read.css";

function ReadMore1() {
  const [datas, setData] = useState([]);

  useEffect(() => {
    axios(
      "https://6480432af061e6ec4d48ebcc.mockapi.io/article-home?page=3&limit=3"
    ).then((result) => setData(result.data));
  }, []);

  return (
    <>
      <Row>
        {cards.map((item) => (
          <>
            <Card style={{ width: '18rem' }}>
              <Col lg={{ span: 1, offset: 0 }}>
                <div>
                  <Card className="card-header" id="card-header">
                    <Card.Img variant="top" src={item.img} id="card-img" />
                  </Card>
                </div>
              </Col>
              <Col lg={{ span: 2, offset: 0 }} key={item.id} id="col-card">
                <Card.Body className="card-body">
                  <Card.Title className="card-title">{item.title}</Card.Title>
                  <Card.Text className="card-text">{item.desc}</Card.Text>
                  <a href={item.link} id="card-goto-read">
                    Baca Selengkapnya
                  </a>
                </Card.Body>
              </Col>
            </Card>
          </>
        ))}
      </Row>
    </>
  );
}

export default ReadMore1;
