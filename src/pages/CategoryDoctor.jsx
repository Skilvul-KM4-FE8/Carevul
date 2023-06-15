import { Col, Container, Row, Button } from "react-bootstrap";
import CardCategory from "../components/CardCategory";
import { Link } from "react-router-dom";
import "./../styles/category-doctor.css";

const CategoryDoctor = () => {
  return (
    <>
      <section id="card" className="category-card">
        <Container fluid>
          <Row id="card-row">
            <CardCategory />
          </Row>
        </Container>
      </section>
    </>
  );
};



export default CategoryDoctor;
