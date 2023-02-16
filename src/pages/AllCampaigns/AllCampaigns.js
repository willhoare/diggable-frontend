import axios from "axios";
import { useState, useEffect } from "react";
import "./AllCampaigns.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ArtistCard from "../../components/ArtistCard/ArtistCard";

export default AllCampaigns;

function AllCampaigns() {
  const [artistList, setArtistList] = useState([]);
  const artistUrl = "http://localhost:8080/artists";

  useEffect(() => {
    const getArtists = async () => {
      const { data } = await axios.get(artistUrl);
      setArtistList(data);
      console.log(data);
    };
    getArtists();
  }, []);

  if (!artistList) {
    return <h1 className="Loading">Loading...</h1>;
  }

  return (
    <>
      <Header />

      <article className="allCampaigns">
        <div className="allCampaigns__content">
          <h1 className="allCampaigns__header">Find the next Big thing.</h1>
          <p className="allCampaigns__paragraph">
            Browse all of the live current campaigns. Each artist below gives a
            littl more information on their background and why they are looking
            to raise funds and offer some exclusive rewards available to you to
            help them reach their goal.
            <br /> Digg deep!
          </p>
        </div>
      </article>
      <div className="headline">
        <h1>Featured Artists</h1>
      </div>
      <div className="allArtists__wrap">
        <div className="allArtists">
          <ArtistCard artistList={artistList} />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
