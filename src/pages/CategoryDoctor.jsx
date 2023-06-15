import { Col, Container, Row, Button } from "react-bootstrap";
import CardCategory from "../components/CardCategory";
import { Link } from "react-router-dom";
import "./../styles/category-doctor.css";

const CategoryDoctor = () => {

  // const [category, setCategory] = useState([])

  // useEffect(() => {
  //   const getCategory = async () => {
  //     const response = await fetch("http://localhost:3000/category");
  //     const data = await response.json();
  //     setCategory(data);
  //   };


  return (
    <>
      <section id="card" className="category-card">
        <Container fluid>
          <div id="card-row" className="row justify-content-center">
            <CardCategory />
          </div>
        </Container>
      </section>
    </>
  );
};



export default CategoryDoctor;
