import { useContext, useEffect, useState } from 'react'
import './../styles/bookingpage.css'
import { PaymentContext } from '../context/paymentContext'
import { Button, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const BookingPage = () => {
    const [fullName, setFullName] = useState('')
    const [complaint, setComplaint] = useState('')

    const {payment, setPayment} = useContext(PaymentContext)

    const navigate = useNavigate()

    // For get data login from localstorage
    const loginData = JSON.parse(localStorage.getItem("idUser"))

    

    console.log(fullName)
    console.log(complaint)
    console.log(payment)

    const handleChangeFullName = (e) => {
        setFullName(e.target.value)
        setPayment({
            ...payment,
            userName: e.target.value,
            idUser: loginData.id,
            complaint: complaint
        })
        console.log(fullName)
    }

    const handleChangeComplaint = (e) => {
        setComplaint(e.target.value)
        setPayment({
            ...payment,
            idUser: loginData.id,
            userName: fullName,
            complaint: e.target.value
        })
        console.log(payment)
    }

    const handleSubmitFormBooking = (e) => {
        e.preventDefault()
        setPayment({
            ...payment,
            idUser: loginData.id,
            userName: fullName,
            complaint: complaint
        })

        // post data to mockapi
        fetch('https://64506b72a3221969114a2d25.mockapi.io/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payment)
        })
        .catch(err => console.log(err))

        // create chat room
        fetch(`https://sk-chat-api.vercel.app/api/room`, {
            method: 'POST',
            headers: {
                'Accept': '*/*',
                "User-Agent": "Thunder Client (https://www.thunderclient.com)"
            },
            body: JSON.stringify({
                "userId": payment.idUser,
                "doctorId": payment.idDoctor
                }
            )
        })
        .then(res => res.json())
        .then(alert('Booking berhasil dilakukan'))
        .then(navigate('/consult/chatroom'))


        // clear payment
        setPayment(false)

        // validate if payment context have a data
        if (!payment) {
        navigate("/listdoctor")
    }

        // // show allert for success
        // alert('Booking berhasil dilakukan')
        
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        console.log(payment)
    }, [payment])


    return (
        <>
            {/* For Modals if not logged in */}
            

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Silahkan Login Terlebih Dahulu</Modal.Title>
                </Modal.Header>
                <Modal.Body>Kamu belum melakukan Login, silahkan login terlebih dahulu untuk melakukan booking dokter !</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Tutup
                </Button>
                <Button variant="primary" onClick={() => navigate('/login')}>
                    Ke Login Page
                </Button>
                </Modal.Footer>
            </Modal>
            {/* End of Modals */}

            <div className="container mt-5">
                <div className="row justify-content-md-center">
                    <div className="col-md-7 text-center">
                        <h4 className="text-carevul">Check Jadwal Konsultasi</h4>
                        <p className="text-light-gray">Pastikan jadwal yang dipilih sesuai dengan pilihan kamu. Yuk, lengkapi nama  lengkap serta keluhan pada kolom di bawah</p>
                    </div>
                </div>
            <div className="row justify-content-md-center">
                <div className="col-md-7">
                    <div className="container background-form-check p-4 shadow rounded">
                        <div className="row">
                            <div className="col-md">
                                <form id="form-book" onSubmit={handleSubmitFormBooking}>
                                    <h5>Jadwal Anda</h5>
                                    <p>Tanggal : 12 Jun 2023 | 20:00 WIB <br />
                                    Nama Dokter : <span className="text-carevul fw-bold">{payment.name}</span></p>
                                    <h6>Nama Lengkap :  </h6>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Masukkan Nama Lengkap" aria-label="Username" aria-describedby="basic-addon1" name="client_name" id="input-name" value={fullName} onChange={e => handleChangeFullName(e)} />
                                    </div>
                                    <h6>Keluhan : </h6>
                                    <div className="form-floating">
                                        <textarea className="form-control" placeholder="Leave a comment here" id="input-keluhan" value={complaint} onChange={(e) => handleChangeComplaint(e)} ></textarea>
                                        <label htmlFor="input-keluhan">Silahkan tuliskan keluhan anda : </label>
                                    </div>
                                    <div className="text-center mt-4">
                                        <p className="fw-light text-carevul"> Harap memasuki roomchat konsultasi pada jadwal yang di tentukan</p>

                                        {
                                            (loginData) ?
                                                <button id="btn-confirm" className="btn color-carevul-gradient text-white" type="submit" name="confirm">Konfirmasi</button>
                                            :
                                            <div className='btn color-carevul-gradient text-black' onClick={handleShow}>
                                                Konfirmasi
                                            </div>
                                        }
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </>
    )
}

export default BookingPage