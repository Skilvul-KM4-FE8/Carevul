import { width } from "@mui/system";
import { Outlet } from "react-router";
import { Link, NavLink } from "react-router-dom";

const Consult = () => {
    return (
        <>
        <header id="header" className="mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Link to="/consult/category" className="fw-bold text-decoration-none" ><h4 className="text-light-gray"> Kategori Dokter</h4></Link>
                    </div>
                    <div className="col-md-1">
                        <h3 className="text-light-gray">|</h3>
                    </div>
                    <div className="col-md-7">
                        <Link to="/consult/chatroom" className="fw-bold text-decoration-none"><h4 className="text-carevul text-decoration-none">Ruang Konsultasi</h4></Link>
                    <p className="lead text-secondary"><small> Pilih dokter yang sesuai dengan kebutuhan kamu yuk!</small></p>
                </div>
                </div>
            </div>
        </header>
            <div className="container mt-4"> 

            {/* Section for outlet */}
                <Outlet />
            {/* Section for outlet */}

        </div>
        </>
    );
}

export default Consult;