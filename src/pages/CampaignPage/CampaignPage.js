import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CampaignPage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import beatles from "../../assets/images/284152.jpeg";
import Sidebar from "../../components/Sidebar/Sidebar";
import Rewards from "../../components/Rewards/Rewards";
import { ProgressBar, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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

  // let totalRaised =(current)
  // let totalRaised =
  //   (currentArtist.campaigns[0].totalRaised / currentArtist.campaigns[0].goal) *
  //   100;
  let totalRaised = currentArtist.campaigns[0].totalraised;

  console.log(toString(totalRaised));

  return (
    <>
      <header>
        <Header />
      </header>
      <div className="contentdivider">
        <section className="pageorder">
          <div className="hero">
            <div className="hero__imagewrap">
              <img
                className="hero__image"
                src={currentArtist.image}
                alt=" current displayed band, add in as template literal later"
              />
            </div>
            <div className="goal">
              <h1>
                {currentArtist.artistname} have so far raised $
                {toString(totalRaised)} of their goal!
              </h1>
              <div className="progressbar">
                <ProgressBar animated now={50} />
              </div>
            </div>
            <div></div>
          </div>
        </section>
        <div className="sidebarRewards">
          <article className="sidebar">
            <div className="sidebar__image">
              <img className="profilephoto" src={currentArtist.image} />
            </div>
            <Sidebar currentArtist={currentArtist} />
          </article>
          <section>
            <Rewards currentArtist={currentArtist} />
          </section>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
