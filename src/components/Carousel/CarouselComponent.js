import "./CarouselComponent.scss";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import { Link } from "react-router-dom";
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
    freeScroll: true,
    wrapAround: true,
    draggable: true,
    groupCells: true,
    pageDots: false,
  };

  useEffect(() => {
    const getArtists = async () => {
      try {
        const { data } = await axios.get(artistUrl);
        console.log(data);
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
          <Link to={`/artists/${artist.id}`} key={index}>
            <div className="carousel-cell">
              <img
                className="d-block w-100"
                src={artist.image}
                alt={artist.artistname}
              />
              <div className="carousel-caption">
                <h1>{artist.artistname}</h1>
                {/* Check if campaigns exist and have at least one item */}
                <p>
                  {artist.campaigns && artist.campaigns.length > 0
                    ? truncateDescription(artist.campaigns[0].description)
                    : "No campaign information available."}
                </p>
                <h3>Read More</h3>
              </div>
            </div>
          </Link>
        ))}
      </Flickity>
    </div>
  );
}

export default CarouselComponent;
