import { Col, Container, Row, Button } from "react-bootstrap";
import "./../styles/article-home.css";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Cardticle from "../components/Cardticle";

const ArticleHome = () => {
  return (
    <>
      <h1>Baca dah ni artikel</h1>
      <Cardticle />
    </>
  );
};



export default ArticleHome;
