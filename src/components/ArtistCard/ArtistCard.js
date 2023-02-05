import "./ArtistCard.scss";
import { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";

const ArtistCard = ({ artistList, setArtistList }) => {
  const artistCard = artistList.map((artist) => {
    return (
      <section className="artistCards">
        <div className="cardContainer">
          <img className="cardContainer__image" src={artist.image} />
          <h2>{artist.artistname}</h2>
        </div>
      </section>
    );
  });
  return artistCard;
};

export default ArtistCard;
