import "./Carousel.scss";
import buzzcocks from "../../assets/GettyImages-84887506-696x442.jpeg";

function Carousel() {
  return (
    <div className="carousel">
      <button className="carousel-button-prev">&#8656;</button>
      <button className="carousel-button-next">&#8658;</button>
      <ul>
        <li className="slide">
          <img src={buzzcocks} />
        </li>
        <li className="slide">
          <img src={buzzcocks}></img>
        </li>
        <li className="slide">
          <img src={buzzcocks}></img>
        </li>
      </ul>
    </div>
  );
}

export default Carousel;
