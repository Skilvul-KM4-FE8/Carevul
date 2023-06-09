import { Col, Container, Row } from "react-bootstrap"
import Calendar from "react-calendar"
// import 'react-calendar/dist/Calendar.css'
import './../styles/Calendar.css'

const PaymentPage = () => {
    return (
        <>
            {/* <h1>Payment Page</h1> */}
            <Container className="mt-5">
                <Row>
                    <Col>
                        {/* <h1 className="text-carevul mb-4">Calendar</h1> */}
                        <Calendar />
                    </Col>
                    
                    <Col>
                        {/* Card Doctor's Info */}
                        <Container className="shadow py-3 px-5 rounded">
                            <Row>
                                <Col className="d-flex justify-content-center align-items-center">
                                <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/914.jpg" alt="doctor" className="rounded-circle" />
                                </Col>
                                <Col className="text-start mb-3" md={7} >
                                <h4 className="text-carevul fw-bold ms-0 mt-2 doctor-name mt-n1">dr. Testt bin udin</h4>
                                <p className=" doctor-name">Dokter Umum <br /> RS. Umum Isekai, Isekai, Indonesia</p>
                                <h5 className=" doctor-name">  <span className="text-carevul ">Rp. 20.000</span></h5>
                                </Col>
                                <Col className="d-flex justify-content-center align-items-center">
                                {/* <Link to={"/list-doctor/id"} className="btn text-white fw-bold color-carevul-gradient px-5 py-2 shadow-sm">Pilih Dokter</Link> */}
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default PaymentPage