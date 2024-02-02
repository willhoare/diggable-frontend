import "./CarouselComponent.scss";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css"; // Import Flickity CSS
import { Link } from "react-router-dom";

import buzzcocks from "../../assets/GettyImages-84887506-696x442.jpeg";
import beatles from "../../assets/images/284152.jpeg";
import joydivision from "../../assets/images/Joy_Division_promo_photo.jpeg";
import { Carousel } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";

function truncateDescription(description) {
  if (description.length > 50) {
    return description.slice(0, 50) + "...";
  }
  return description;
}

function CarouselComponent() {
  const [artistList, setArtistList] = useState([]);
  const artistUrl = "http://localhost:8080/artists";

  const flickityOptions = {
    wrapAround: true,
    groupCells: true,
  };

  useEffect(() => {
    const getArtists = async () => {
      try {
        const { data } = await axios.get(artistUrl);
        console.log(data); // Log the received data
        setArtistList(data);
      } catch (error) {
        console.error("Error fetching artists:", error);
      }
    };
    getArtists();
  }, []);

  if (!artistList) {
    return <h1 className="Loading">Loading...</h1>;
  }

  return (
    <div>
      <Flickity options={flickityOptions}>
        {artistList.map((artist, index) => (
          <Link to={`/artists/${artist.id}`}>
            <div key={index} className="carousel-cell">
              <img
                className="d-block w-100"
                src={artist.image}
                alt={artist.artistname}
              />
              <Carousel.Caption>
                <h1>{artist.artistname}</h1>
                <p>
                  {truncateDescription(artist.campaigns[0].description)}
                </p>{" "}
                {/* Truncate description */}
                <h3>Read More</h3>
              </Carousel.Caption>
            </div>
          </Link>
        ))}
      </Flickity>
    </div>
  );
}

// return artistCard;

export default CarouselComponent;
