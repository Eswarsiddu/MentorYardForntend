import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Testimonial.css";
import abhishekBhaiya from "../../assets/Images/Testimonial/BatMan.jpeg";
import vivek from "../../assets/Images/Testimonial/AntMan.jpeg";
import urvish from "../../assets/Images/Testimonial/BlackPanther.jpeg";
import jangid from "../../assets/Images/Testimonial/DeadPool.jpeg";
import ankit from "../../assets/Images/Testimonial/DoctorStrange.jpeg";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";

function Testimonial() {
  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 500,
    URLhashListener: true,
    startPosition: "URLHash",
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <section className="testimonial-section">
      <ScreenHeading
        subHeading={"What Our Mentees Say About Us"}
        title={"Testimonials"}
      />

      <div className="container">
        <div className="row">
          <OwlCarousel
            className="owl-carousel"
            id="testimonial-carousel"
            {...options}>



            <div className="col-lg-12">
              <div className="testi-item">
                <div className="testi-comment">
                  <p>
                    <i className="fa fa-quote-left" />
                    Working with Vishal was better than expected and we had
                    really high expectations. He is always ready to learn new
                    things by doing all the research about best practices and
                    implementing them. I believe he is a very talented and
                    favourible employee , one who is always
                    <i className="fa fa-quote-right" />
                  </p>
                  <ul className="stars list-unstyled">
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star-half-alt" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                </div>
                <div className="client-info">
                  <img src={urvish} alt="no internet connection"></img>
                  <h5>Black Panther</h5>
                  <p>
                    CTO <small>Wakanda Forever</small>{" "}
                  </p>
                  <div className="testimonial-icon">
                    <a href="https://www.linkedin.com/in/vishal-soni-a8ab14a9/">
                      <i
                        className="fa fa-linkedin-square"
                        style={{
                          color: "rgba(10,102,194)",
                        }}></i>
                    </a>
                    <a href="https://www.linkedin.com/in/vishal-soni-a8ab14a9/">
                      <i
                        className="fa fa-instagram"
                        style={{
                          color: "#f55317fc",
                        }}></i>
                    </a>
                    <a href="https://www.linkedin.com/in/vishal-soni-a8ab14a9/">
                      <i className="fa fa-facebook-square"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="testi-item">
                <div className="testi-comment">
                  <p>
                    <i className="fa fa-quote-left" />
                    Vishal is an extraordinarily experienced employee who deeply
                    understands his work and gets things done efficiently,
                    thoroughly, and correctly in accordance with best practices.
                    Drawing from his vast experience, First and foremost, he
                    defines reality and passion.
                    <i className="fa fa-quote-right" />
                  </p>
                  <ul className="stars list-unstyled">
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star-half-alt" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                </div>
                <div className="client-info">
                  <img src={ankit} alt="no internet connection"></img>
                  <h5>Doctor Strange</h5>
                  <p>
                    Avengers <small> Doctor</small>
                  </p>
                  <div className="testimonial-icon">
                    <a href="https://www.linkedin.com/in/vishal-soni-a8ab14a9/">
                      <i
                        className="fa fa-linkedin-square"
                        style={{
                          color: "rgba(10,102,194)",
                        }}></i>
                    </a>
                    <a href="https://www.linkedin.com/in/vishal-soni-a8ab14a9/">
                      <i
                        className="fa fa-instagram"
                        style={{
                          color: "#f55317fc",
                        }}></i>
                    </a>
                    <a href="https://www.linkedin.com/in/vishal-soni-a8ab14a9/">
                      <i className="fa fa-facebook-square"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="testi-item">
                <div className="testi-comment">
                  <p>
                    <i className="fa fa-quote-left" />
                    I have worked with Vishal during PrepLeaf development phase.
                    From the start of the project, through to completion,he
                    supported us and exceeded our expectations in every way. Not
                    only was our experience personal and friendly, his ability
                    to
                    <i className="fa fa-quote-right" />
                  </p>
                  <ul className="stars list-unstyled">
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star-half-alt" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star-half-alt" />
                    </li>
                    <li>
                      <i className="fa fa-star-half" />
                    </li>
                  </ul>
                </div>
                <div className="client-info">
                  <img src={jangid} alt="no internet connection"></img>
                  <h5>Dead Pool </h5>
                  <p>
                    CTO <small>PrepLeaf</small>
                  </p>
                  <div className="testimonial-icon">
                    <a href="https://www.linkedin.com/in/vishal-soni-a8ab14a9/">
                      <i
                        className="fa fa-linkedin-square"
                        style={{
                          color: "rgba(10,102,194)",
                        }}></i>
                    </a>
                    <a href="https://www.linkedin.com/in/vishal-soni-a8ab14a9/">
                      <i
                        className="fa fa-instagram"
                        style={{
                          color: "#f55317fc",
                        }}></i>
                    </a>
                    <a href="https://www.linkedin.com/in/vishal-soni-a8ab14a9/">
                      <i className="fa fa-facebook-square"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="testi-item">
                <div className="testi-comment">
                  <p>
                    <i className="fa fa-quote-left" />
                    It's a real pleasure working with Vishal. His talent and
                    experience proved immensely valuable for our latest project.
                    He was involved from the very beginning, providing advice
                    and guidance even before we signed the proposal. His
                    previous sweet and sour experiences,
                    <i className="fa fa-quote-right" />
                  </p>
                  <ul className="stars list-unstyled">
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star-half-alt" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                </div>
                <div className="client-info">
                  <img src={vivek} alt="no internet connection"></img>
                  <h5>Ant Man</h5>
                  <p>
                    Eater <small>Ants</small>
                  </p>
                  <div className="testimonial-icon">
                    <a href="https://www.linkedin.com/in/vishal-soni-a8ab14a9/">
                      <i
                        className="fa fa-linkedin-square"
                        style={{
                          color: "rgba(10,102,194)",
                        }}></i>
                    </a>
                    <a href="https://www.linkedin.com/in/vishal-soni-a8ab14a9/">
                      <i
                        className="fa fa-instagram social-logo"
                        style={{
                          color: "#f55317fc",
                        }}></i>
                    </a>
                    <a href="https://www.linkedin.com/in/vishal-soni-a8ab14a9/">
                      <i className="fa fa-facebook-square"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>


          </OwlCarousel>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
