import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CampaignPage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ArtistCard from "../../components/ArtistCard/ArtistCard";

export default CampaignPage;

function CampaignPage() {
  const BASE_API_URL = "http://localhost:8080/artists";
  const [currentArtist, setCurrentArtist] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    try {
      async function getArtist() {
        const { data } = await axios.get(`${BASE_API_URL}/${id}`);
        setCurrentArtist(data);
      }
      getArtist();
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  const navigate = useNavigate();

  function clickHandler() {
    navigate(`/${id}/edit`);
  }

  return (
    <>
      <section>
        <Header />
        <h1>testing</h1>
        <div>{currentArtist && <h1>{currentArtist.artistname}</h1>}</div>
      </section>
    </>
  );
}
