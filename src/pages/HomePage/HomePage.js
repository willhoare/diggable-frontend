import axios from "axios";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
import "./HomePage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ArtistCard from "../../components/ArtistCard/ArtistCard";
import BurgerBar from "../../components/BurgerBar/BurgerBar";
import CarouselComponent from "../../components/Carousel/CarouselComponent";
import Introduction from "../../components/Introduction/Introduction";

export default HomePage;

function HomePage() {
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
  // return artistList.map((artist) => {
  //   let id = artist.id;

  // let description = artistList[0].campaigns[0].description;
  // console.log(description);

  return (
    <>
      <Header />
      {/* <BurgerBar /> */}
      <Introduction />
      <CarouselComponent artistList={artistList} />
      {/* <div className="headline">
        <h1>Featured Artists</h1>
      </div>
      <div className="allArtists__wrap">
        <div className="allArtists">
          <ArtistCard artistList={artistList} />
        </div>
      </div> */}

      <div>
        <Footer />
      </div>
    </>
  );
}
