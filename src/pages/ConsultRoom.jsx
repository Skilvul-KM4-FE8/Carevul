import { Link } from 'react-router-dom'
import noConsult from './../assets/no_booked_doctor.svg'

const ConsultRoom = () => {
    return (
        <>
            <section id="doctors-list">
                <div className="row justify-content-md-center ">
                    <div className="col-md-7 text-center">
                        <p className="text-light-gray fw-light">
                            Silahkan berkonsultasi dengan dokter, ceritakan apa yang kamu rasakan kepada dokter agar dokter dapat memberi solusi buat kamu ya!
                        </p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                            <img src={noConsult} />
                    </div>
                </div>
                <div className="row justify-content-md-center mt-2">
                    <div className="col-md-4 d-flex">
                        <Link to="/consult/category" className="btn color-carevul-gradient flex-fill text-white px-5 py-2">Mulai Konsultasi</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ConsultRoom