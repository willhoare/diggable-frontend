import "./CarouselComponent.scss";
import buzzcocks from "../../assets/GettyImages-84887506-696x442.jpeg";
import beatles from "../../assets/images/284152.jpeg";
import joydivision from "../../assets/images/Joy_Division_promo_photo.jpeg";
import { Carousel } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";

function CarouselComponent() {
  const [artistList, setArtistList] = useState([]);
  const artistUrl = "http://localhost:8080/artists";

  useEffect(() => {
    const getArtists = async () => {
      const { data } = await axios.get(artistUrl);
      setArtistList(data);
    };
    getArtists();
  }, []);

  if (!artistList) {
    return <h1 className="Loading">Loading...</h1>;
  }

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={buzzcocks} alt="First slide" />
          <Carousel.Caption>
            <h1>The Buzzcocks</h1>
            <p>Touring across Europe. 60% of Goal reached!</p>
            <h3>Read More</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={beatles} alt="Second slide" />

          <Carousel.Caption>
            <h1>The Beatles</h1>
            <p>Touring north America this summer. 75% of Goal reached!</p>
            <h3>Read More</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={joydivision} alt="Third slide" />

          <Carousel.Caption>
            <h1>Joy Division</h1>
            <p>
              Kicking off a US tour with dates across the East coas this fall.
              90% of Goal reached!
            </p>
            <h3>Read More</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

// return artistCard;

export default CarouselComponent;
