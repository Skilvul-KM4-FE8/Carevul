import carevulLogo from "../assets/carevul-logo.svg";
import "../styles/footer.css";
import { Link } from "react-router-dom";
import fb from "../assets/icon/icons8-facebook.svg";
import ins from "../assets/icon/icons8-instagram.svg";
import lin from "../assets/icon/icons8-linked-in.svg";
import twi from "../assets/icon/icons8-twitter.svg";
import yt from "../assets/icon/icons8-youtube.svg";

const footer = () => {
  return (
    <>
      <div className="bg-color-footer mt-5 stroke-card-border shadow-sm">
        <div className="container py-5 ">
          <div className="row d-flex justify-content-between">
            <div className="col-mb-5 col-6 mt-3 ">
              <img src={carevulLogo} alt="" />
              <p className="text-gray">
                <h6>
                  Kamu lagi sakit?
                  <span className="text-carevul">&nbsp;Carevul </span>{" "}
                  solusinya,
                  <br />
                  tanpa antri, tanpa ribet, konsulin aja!
                </h6>
              </p>
              <div className="social-media d-flex justify-content-between">
                <a href="https://www.facebook.com" target="_blank">
                  <img src={fb} alt="" />
                </a>
                <a href="https://www.instagram.com" target="_blank">
                  <img src={ins} alt="" />
                </a>
                <a href="https://www.twitter.com" target="_blank">
                  <img src={twi} alt="" />
                </a>
                <a href="https://www.linkedin.com" target="_blank">
                  <img src={lin} alt="" />
                </a>
                <a href="https://www.facebook.com" target="_blank">
                  <img src={yt} alt="" />
                </a>
              </div>
            </div>

            <div className="col-lg col- mt-3">
              <h5 className="text-carevul mb-4">Site Map</h5>

              <div className="list-footer ">
                <div>
                  <Link to="/" className="mb-1 d-block text-gray">
                    Home
                  </Link>
                  <br />
                  <Link
                    to="./../article/article.html"
                    className="mb-1 d-block text-gray"
                  >
                    Artikel
                  </Link>
                  <br />
                  <Link
                    to="./../bmi-calculator/index.html"
                    className="mb-1 d-block text-gray"
                  >
                    Kalkulator BMI
                  </Link>
                  <br />
                </div>
              </div>
            </div>
            <div className="col-lg col-7 mt-3">
              <h5 className="text-carevul mb-4 ">Lainnya</h5>

              <div className="list-footer ">
                <div>
                  <Link to="" className="mb-1 d-block text-gray">
                    Syarat & Ketentuan
                  </Link>
                  <br />
                  <Link to="" className="mb-1 d-block text-gray">
                    Kebijakan Privasi
                  </Link>
                  <br />
                  <Link to="" className="mb-1 d-block text-gray">
                    Contact Us
                  </Link>
                  <br />
                </div>
              </div>
            </div>
            <div className="col-lg col-7 mt-3">
              <h5 className="text-carevul mb-4 ">Kontak Kami</h5>

              <div className="list-footer">
                <div>
                  <i className="fa-solid fa-envelope mb-4 "></i> &nbsp;
                  <Link className="mb-4">Carevul@help.com </Link> <br />
                  <i className="fa-solid fa-location-dot"></i> &nbsp;
                  <Link>Sumatra, Indonesia</Link> <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default footer;
