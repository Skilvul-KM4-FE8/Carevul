import Doctor from "../assets/medical-doctor.png";
import History from "../assets/medical-history.png";
import Online from "../assets/medical-online.png";
import "../styles/Landing.css";
import Pict1 from "../assets/pict1.png";
import Pict2 from "../assets/pict2.png";
import { Container, Row } from "react-bootstrap";

const Landing = () => {
  return (
    <>
      <section className=" color-carevul-gradient mt-0 ">
        <div className="hero-container d-flex justify-content-space-between m-3 mt-0">
          <div className="hero-text text-white ms-4">
            <h3 className="text-white mt-5">
              Selamat Datang
              <br />
              di Carevul!
            </h3>
            <h5 className="text-white mt-3">
              Layanan kesehatan yang dapat kamu akses secara online.
              <br /> Gratis! dimanapun dan kapanpun. Segera hubungi dokter
              pilihanmu di Carevul!
            </h5>
            <button className="logindong btn text-carevul border-carevul text-color-carevul bg-white mt-3">
              Lebih Lanjut
            </button>
          </div>
          <div className="hero-image">
            <img src={Pict1} className="Character" alt="" />
          </div>
        </div>
      </section>

      {/*  */}

      <section className="service">
        <div className="">
          <h1 className="a-text d-flex">Pelayanan kami</h1>
          <h6 className="text-center">
            Beberapa pelayanan kami yang bisa kamu dapatkan sesuai dengan
            kebutuhanmu nih Carefriends!
          </h6>
          <div className="container-fluid">
            <Row className="gap-4 justify-content-center">
              <div className="col-md-3 m-md-4 ">
                <div className="item-service">
                  <div className="card-service d-flex flex-column align-items-center justify-content-center">
                    <img src={Online} alt="" />
                    <h3>Konsultasi Online</h3>
                    <h6 className="text-center">
                      Menyediakan layanan konsultasi online selama 24 jam
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-md-3 m-md-4">
                <div className="item-service">
                  <div className="card-service d-flex flex-column align-items-center justify-content-center">
                    <img src={History} alt="" />
                    <h3>Medis Profesional</h3>
                    <h6 className="text-center">
                      Tenaga medis yang sudah berpengalaman di bidangnya
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-md-3 m-md-4">
                <div className="item-service">
                  <div className="card-service d-flex flex-column align-items-center justify-content-center">
                    <img src={Doctor} alt="" />
                    <h3>Dokter Berkualitas</h3>
                    <h6 className="text-center">
                      Lulusan dokter dari banyak negara maju yang berkualitas
                    </h6>
                  </div>
                </div>
              </div>
            </Row>
          </div>
        </div>

        <section className="introduction">
          <div className="a-container">
            <div className="card-introduction d-flex align-center">
              <img src={Pict2} className="Character" alt="" />
              <div className="desc">
                <h2>Kenalan sama kita yuk!</h2>
                <h6>
                  Dear Carefriends, terima kasih telah membersamai kami sejak
                  tahun 2023. Kami berkomitmen untuk membantu masyarakat dalam
                  layanan konsultasi secara online dengan tenaga kesehatan yang
                  ahli dan profesional.
                </h6>
                <h6>
                  Tetap berkembang bersama kami untuk mendukung fasilitas
                  Telemedicine yang nyaman digunakan ya Carefriends!
                </h6>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Landing;
