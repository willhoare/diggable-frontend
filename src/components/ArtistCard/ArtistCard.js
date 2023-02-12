import "./ArtistCard.scss";
import { Link } from "react-router-dom";

const ArtistCard = ({ artistList, setArtistList }) => {
  const artistCard = artistList.map((artist) => {
    return (
      <section className="artistCards">
        <Link to={`/artists/${artist.id}`}>
          <div className="cardContainer">
            <img
              className="cardContainer__image"
              src={artist.heroImage}
              alt="image of featured band"
            />
            <h2>{artist.artistname}</h2>
            <p></p>
          </div>
        </Link>
      </section>
    );
  });
  return artistCard;
};

export default ArtistCard;
