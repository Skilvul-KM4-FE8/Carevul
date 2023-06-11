import { Col, Container, Row } from "react-bootstrap"
import Calendar from "react-calendar"
// import 'react-calendar/dist/Calendar.css'
import './../styles/Calendar.css'

import gopayLogo from "./../assets/gopay.svg"
import shopeepayLogo from "./../assets/shopeepay.svg"
import ovoLogo from "./../assets/ovo.svg"
import danaLogo from "./../assets/dana.svg"
import { useContext, useEffect, useState } from "react"
import { PaymentContext } from "../context/paymentContext"
import { Outlet } from "react-router"

const PaymentPage = () => {
    
    const [radioVal, setRadioVal] = useState(false);

    // from Context
    const { payment, setPayment } = useContext(PaymentContext);

    const handleRadioChange = (event) => {
        setRadioVal(event.target.value);
        console.log(radioVal)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const idBooking = Math.random();
        // console.log(radioVal)
        setPayment({
            idUser: "iduser",
            idDoctor: "iddoctor",
            bookingId: idBooking,
            paymentMethod: radioVal,
        });
        // console.log(payment)
    };
    
    useEffect(() => {
        console.log(payment)
    }, [payment]);

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

                    <Container> 
                        <Row>
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
                        <Row>
                            <Col className="mt-5">
                                <h4 className="text-carevul fw-bold">Pilih Metode Pembayaran</h4>
                                    <form onSubmit={handleSubmit}>
                                        {/* Gopay */}
                                            <div className="form-check ms-0 py-2 px-5 border rounded mt-1 shadow-sm  border-2 border-primary border-carevul">
                                                {/* Section Input */}
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-1 d-flex justify-content-center align-items-center">
                                                                <input className="form-check-input circle-radio-btn" type="radio" name="book-date" id="gopay" value={"gopay"} onClick={(e) => handleRadioChange(e)} />
                                                            </div>
                                                            <div className="col">
                                                                <label className="form-check-label" htmlFor="gopay">
                                                                    <p className="lead mt-3"><img src={gopayLogo} width={100} /></p>
                                                                    {/* <h5 className="text-carevul">Rp. 20000</h5> */}
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                {/* End Section Input */}
                                            </div>
                                        {/* End Gopay */}
                                        {/* shopeepay */}
                                            <div className="form-check ms-0 py-2 px-5 border rounded mt-1 shadow-sm  border-2 border-primary">
                                                {/* Section Input */}
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-1 d-flex justify-content-center align-items-center">
                                                                <input className="form-check-input circle-radio-btn" type="radio" name="book-date" id="shopeepay" value={"shopeepay"} onClick={(e) => handleRadioChange(e)} />
                                                            </div>
                                                            <div className="col">
                                                                <label className="form-check-label" htmlFor="shopeepay">
                                                                    <p className="lead mt-3"><img src={shopeepayLogo} width={100} /></p>
                                                                    {/* <h5 className="text-carevul">Rp. 20000</h5> */}
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                {/* End Section Input */}
                                            </div>
                                        {/* End shopeepay */}
                                        {/* dana */}
                                            <div className="form-check ms-0 py-2 px-5 border rounded mt-1 shadow-sm  border-2 border-primary">
                                                {/* Section Input */}
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-1 d-flex justify-content-center align-items-center">
                                                                <input className="form-check-input circle-radio-btn" type="radio" name="book-date" id="dana" value={"dana"} onClick={(e) => handleRadioChange(e)} />
                                                            </div>
                                                            <div className="col">
                                                                <label className="form-check-label" htmlFor="dana">
                                                                    <p className="lead mt-3"><img src={danaLogo} width={100} /></p>
                                                                    {/* <h5 className="text-carevul">Rp. 20000</h5> */}
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                {/* End Section Input */}
                                            </div>
                                        {/* End dana */}
                                        {/* ovo */}
                                            <div className="form-check ms-0 py-2 px-5 border rounded mt-1 shadow-sm  border-2 border-primary">
                                                {/* Section Input */}
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-1 d-flex justify-content-center align-items-center">
                                                                <input className="form-check-input circle-radio-btn" type="radio" name="book-date" id="ovo" value={"ovo"} onClick={(e) => handleRadioChange(e)} />
                                                            </div>
                                                            <div className="col">
                                                                <label className="form-check-label" htmlFor="ovo">
                                                                    <p className="lead mt-3"><img src={ovoLogo} width={100} /></p>
                                                                    {/* <h5 className="text-carevul">Rp. 20000</h5> */}
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                {/* End Section Input */}
                                            </div>
                                        {/* End ovo */}
                                        <div className="col-md-12 d-flex">
                                            <button type="submit" className="btn color-carevul-gradient text-white mt-4 px-5 py-2 flex-fill" id="book-btn">Buat Janji</button>
                                        </div>
                                    </form>
                            </Col>
                        </Row>
                    </Container>
                        
                    </Col>
                </Row>
            </Container>
            <Outlet />bias 
        </>
    )
}

export default PaymentPage