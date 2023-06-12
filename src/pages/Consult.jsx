import { width } from "@mui/system";
import { Outlet } from "react-router";
import { Link, NavLink } from "react-router-dom";

const Consult = () => {
    return (
        <>
        <header id="header" className="margin-top-initial">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <NavLink to="/category" className="fw-bold text-decoration-none" ><h3 className="text-light-gray"> Kategori Dokter</h3></NavLink>
                    </div>
                    <div className="col-md-1">
                        <h3 className="text-light-gray">|</h3>
                    </div>
                    <div className="col-md-3">
                        <NavLink to="" className="fw-bold"><h3 className="text-carevul text-decoration-none">Ruang Konsultasi</h3></NavLink>
                    <p className="lead text-secondary"><small> Pilih dokter yang sesuai dengan kebutuhan kamu yuk!</small></p>
                </div>
                </div>
            </div>
        </header>
            <div className="container mt-4">
            <section id="doctors-list">
                <div className="row justify-content-md-center ">
                    <div className="col-md-7 text-center">
                        <p className="text-light-gray fw-light">
                            Silahkan berkonsultasi dengan dokter, ceritakan apa yang kamu rasakan kepada dokter agar dokter dapat memberi solusi buat kamu ya!
                        </p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                            <img src={""} />
                            <Outlet />
                    </div>
                </div>
                <div className="row justify-content-md-center mt-2">
                    <div className="col-md-4 d-flex">
                        <a href="./../kategori_dokter/index.html" className="btn color-carevul-gradient flex-fill text-white px-5 py-2">Mulai Konsultasi</a>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
}

export default Consult;