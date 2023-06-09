import { Col, Container, Row, Button } from "react-bootstrap";
import "./../styles/list-doctor.css";
import { Link } from "react-router-dom";

const ListDoctor = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="text-start">
            <h2 className="text-carevul fw-bold">Rekomendasi Dokter</h2>
            <p className="text-secondary">Pilih dokter yang sesuai dengan kebutuhan kamu yuk</p>
          </Col>
        </Row>
        <Row>
          <Col>
            {/* <div className="shadow-sm"> */}
            <Container className="shadow py-3 px-5 rounded">
              <Row>
                <Col className="d-flex justify-content-center align-items-center">
                  <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/914.jpg" alt="doctor" className="rounded-circle" />
                </Col>
                <Col className="text-start mb-3" md={7} >
                  <h4 className="text-carevul fw-bold ms-0 mt-2 doctor-name mt-n1">dr. Testt bin udin</h4>
                  <p className=" doctor-name">Dokter Umum <br /> RS. Umum Isekai, Isekai, Indonesia</p>
                  {/* <h5 className=" doctor-name">  <span className="text-carevul ">1 Pasien</span>   telah buat janji dengan dokter ini</h5> */}
                  <h5 className=" doctor-name">  <span className="text-carevul ">Rp. 20.000</span></h5>
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                  <Link to={"/list-doctor/id"} className="btn text-white fw-bold color-carevul-gradient px-5 py-2 shadow-sm">Pilih Dokter</Link>
                </Col>
              </Row>
            </Container>
            {/* </div> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ListDoctor;
