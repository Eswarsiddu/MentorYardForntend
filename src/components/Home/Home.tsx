import "./Home.css";
import VerticalCarousel from "../VerticalCarousel/VerticalCarousel";

export function Home() {
  return (
    <div className="home__container">
      <div className="home__parent" id="home-parent">
        <div className="home__contents">
          <h1 className="home__heading__vision heading">Our Vision</h1>
          <h5>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            inventore consequuntur dolore dolores odit quae aut animi? Debitis
            repellendus vero nobis facere asperiores nihil distinctio iste ea amet
            libero eum, perferendis quidem officia sapiente. Sapiente non
            excepturi dicta ipsa eos incidunt voluptates quibusdam, nemo
            consequatur provident dolor nostrum! Praesentium iure error neque sit

          </h5>

          <h2 className="home__heading__why__us heading">Why Join MentorYard?</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            inventore consequuntur dolore dolores odit quae aut animi? Debitis
            repellendus vero nobis facere asperiores nihil distinctio iste ea amet
            libero eum, perferendis quidem officia sapiente. Sapiente non
            excepturi dicta ipsa eos incidunt voluptates quibusdam, nemo
            excepturi dicta ipsa eos incidunt voluptates quibusdam, nemo
            consequatur provident dolor nostrum! Praesentium iure error neque sit
            earum voluptatum sapiente, fugit, repellendus facere omnis fugiat,
            libero eum, perferendis quidem officia sapiente. Sapiente non
            excepturi dicta ipsa eos incidunt voluptates quibusdam, nemo
            excepturi dicta ipsa eos incidunt voluptates quibusdam, nemo
            consequatur provident dolor nostrum! Praesentium iure error neque sit
            earum voluptatum sapiente, fugit, repellendus facere omnis fugiat,

          </p>

          {/* <button type="submit" className="login__btn ">Login</button> */}
          <button type="submit" className="register__btn ">Get Started</button>
        </div>
       

        <div className="home__carousel">
          <VerticalCarousel />
        </div>
      </div>
    </div>
  );
}
