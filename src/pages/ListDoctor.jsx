import { Col, Container, Row, Button } from "react-bootstrap";
import "./../styles/list-doctor.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ListDoctor = () => {

  const [doctors, setDoctors] = useState([])

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://64506b72a3221969114a2d25.mockapi.io/doctors")
      .then((response) => response.json())
      .then((data) => setDoctors(data));
      console.log(doctors)
  }, []);


  return (
    <>
      <Container>
        <Row>
          <Col className="text-start">
            <h2 className="text-carevul fw-bold">Rekomendasi Dokter</h2>
            <p className="text-secondary">Pilih dokter yang sesuai dengan kebutuhan kamu yuk</p>
          </Col>
        </Row>

        {
          doctors.map((doctor) => (
                <Row key={doctor.id}>
                  <Col>
                    {/* <div className="shadow-sm"> */}
                    <Container className="shadow py-3 px-5 rounded">
                      <Row>
                        <Col className="d-flex justify-content-center align-items-center">
                          <img src={doctor.avatar} alt="doctor" className="rounded-circle" />
                        </Col>
                        <Col className="text-start mb-3" md={7} >
                          <h4 className="text-carevul fw-bold ms-0 mt-2 doctor-name mt-n1">dr. {doctor.name} </h4>
                          <p className=" doctor-name">Dokter {doctor.category}<br /> {doctor.hospital}</p>
                          {/* <h5 className=" doctor-name">  <span className="text-carevul ">1 Pasien</span>   telah buat janji dengan dokter ini</h5> */}
                          <h5 className=" doctor-name">  <span className="text-carevul ">Rp. {doctor.totalPatient}</span></h5>
                        </Col>
                        <Col className="d-flex justify-content-center align-items-center">
                          <button onClick={() => navigate(`../paymentdoctor/${doctor.id}`)} className="btn text-white fw-bold color-carevul-gradient px-5 py-2 shadow-sm">Pilih Dokter</button>
                        </Col>
                      </Row>
                    </Container>
                    {/* </div> */}
                  </Col>
                </Row>
          ))
        }

      </Container>
    </>
  );
};

export default ListDoctor;