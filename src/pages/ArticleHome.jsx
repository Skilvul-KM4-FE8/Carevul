import { Col, Container, Row, Button } from "react-bootstrap";
import "./../styles/article-home.css";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

const ArticleHome = () => {
  return (
    <>
      <section id="card" className="article-card">
        <Container fluid>
          <div className="title-holder">
            <h2>Artikel</h2>
            <div>bacalah artikel ini bro</div>
          </div>
          <Row>
            {cardData.map((data) => {
              return (
                <Col sm={4} key={data.id}>
                <div>
                  <Card>
                    <Card.Img variant="top" src={data.img} />
                    <Card.Body>
                      <Card.Title>{data.title}</Card.Title>
                      <Card.Text>
                        {data.desc}
                      </Card.Text>
                      <a href={data.link} className="btn btn-primary">Baca Selengkapnya</a>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ArticleHome;
