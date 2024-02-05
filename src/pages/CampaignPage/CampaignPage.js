import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CampaignPage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";
import Rewards from "../../components/Rewards/Rewards";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "../../components/Modal/Modal";
import editIcon from "../../assets/icons/edit.png";

function CampaignPage() {
  const BASE_API_URL = "http://localhost:8080/artists";
  const [currentArtist, setCurrentArtist] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getArtist = async () => {
      try {
        const { data } = await axios.get(`${BASE_API_URL}/${id}`);
        setCurrentArtist(data);
        console.log("Artist Data:", data); // Add this console.log
      } catch (error) {
        console.error("Error fetching artist:", error);
      }
    };
    getArtist();
  }, [id]);

  if (!currentArtist) {
    return <h1 className="Loading">Loading...</h1>;
  }

  // Check if campaigns exist and have at least one item
  const campaignExists =
    currentArtist.campaigns && currentArtist.campaigns.length > 0;
  let totalRaised = campaignExists ? currentArtist.campaigns[0].totalRaised : 0;
  let progress = campaignExists
    ? (100 / currentArtist.campaigns[0].goal) * totalRaised
    : 0;

  console.log(currentArtist.image);

  return (
    <>
      <Header />
      <div className="contentdivider">
        <section className="pageorder">
          <div className="hero">
            <img
              className="hero__image"
              src={currentArtist.image}
              alt="current displayed band"
            />
            <div className="goal">
              <h1>
                {currentArtist.artistname} have so far raised ${totalRaised} and{" "}
                {progress}% of their goal!
              </h1>
              <ProgressBar animated now={progress} />
            </div>
            <iframe
              src="https://open.spotify.com/embed/track/7CLzqUggnD6KW5q8GG95ja?utm_source=generator"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
            {campaignExists && (
              <div className="campaignOverview">
                <h2>{currentArtist.campaigns[0].description}</h2>
              </div>
            )}
          </div>
        </section>
        <Sidebar currentArtist={currentArtist} />
      </div>
      <Footer />
    </>
  );
}

export default CampaignPage;
