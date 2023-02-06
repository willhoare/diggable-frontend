import "./ArtistCard.scss";
import { useState, useEffect } from "react";

import { NavLink, Link } from "react-router-dom";

const ArtistCard = ({ artistList, setArtistList }) => {
  const artistCard = artistList.map((artist) => {
    return (
      <section className="artistCards">
        <Link to={`/artists/${artist.id}`}>
          <div className="cardContainer">
            <img className="cardContainer__image" src={artist.image} />
            <h2>{artist.artistname}</h2>
          </div>
        </Link>
      </section>
    );
  });
  return artistCard;
};

export default ArtistCard;
