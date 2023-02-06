import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CampaignPage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import beatles from "../../assets/images/284152.jpeg";
import Sidebar from "../../components/Sidebar/Sidebar";
import Rewards from "../../components/Rewards/Rewards";

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

  if (!currentArtist) {
    return <h1 className="Loading">Loading...</h1>;
  }

  // const navigate = useNavigate();

  // function clickHandler() {
  //   navigate(`/${id}/edit`);
  // }

  return (
    <>
      <header>
        <Header />
      </header>

      <section className="pageorder">
        <div className="hero">
          <img
            className="hero__image"
            src={currentArtist.image}
            alt=" current displayed band, add in as template literal later"
          />
        </div>
        <div>
          <h1>{currentArtist.artistname}</h1>
        </div>
      </section>
      <article className="sidebar">
        <Sidebar currentArtist={currentArtist} />
      </article>
      <section>
        <Rewards currentArtist={currentArtist} />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
