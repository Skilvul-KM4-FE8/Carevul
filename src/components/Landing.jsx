import Card from "./Card";
import Banner from "../assets/Banner.svg";
import CardMain from "../assets/CardMain.svg";
import Services from "./Services";

const Landing = () => {
  return (
    <>
      <section>
        <div>
          <img src={Banner} alt="banner" />
        </div>
        <div>
          <div class="banner container wrapper-top">
            <div class="row wrapper-top">
              <br />
              <div class="col-lg-7 col-sm-12 m-auto text-center">
                <h2 data-aos="fade-up" data-aos-delay="50">
                  Pelayanan Kami
                </h2>
              </div>
            </div>

            <div class="row wrapper-bottom">
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                class="col-lg-5 m-auto text-center"
              >
                <p>
                  Beberapa pelayanan kami yang bisa kamu dapatkan sesuai dengan
                  kebutuhanmu nih Carefriends!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={CardMain} alt="" />
        </div>
      </section>
      <h3>main 2</h3>
      <Services />

      <h3>main article</h3>
      <Card />

      <h3>main 3</h3>

      <h3>Footer</h3>
    </>
  );
};

export default Landing;
