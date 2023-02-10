import "./CreateCampaignNew.scss";
import "../CreateCampaign/bootstrap.min.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

// trying to add the upload image functionality //

export default function CreateCampaignNew() {
  const [image, setImage] = useState(null);
  const [campaignName, setCampaignName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [goal, setGoal] = useState("");
  const [description, setDescription] = useState("");

  console.log(campaignName);
  console.log(image);

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("campaignName", campaignName);
    formData.append("artistName", artistName);
    formData.append("goal", goal);
    formData.append("description", description);

    const sendData = async () => {
      await axios.post("http://localhost:8080/artists", formData);
    };
    sendData();
  }

  return (
    <>
      <Header />
      <h2>Campaign upload section</h2>
      <section className="form">
        <form className="form__wrap" onSubmit={handleSubmit}>
          <input
            name="campaignName"
            placeholder="Campaign Name"
            type="text"
            onChange={(e) => {
              setCampaignName(e.target.value);
            }}
          ></input>

          <input
            name="artistName"
            placeholder="Artist Name"
            type="text"
            onChange={(e) => {
              setArtistName(e.target.value);
            }}
          ></input>

          <input
            name="goal"
            placeholder="Financial goal for your campaign "
            type="text"
            onChange={(e) => {
              setGoal(e.target.value);
            }}
          ></input>

          <input
            name="description"
            placeholder="Give a short description of your campaign"
            type="text"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></input>

          <input
            type="file"
            name="campaignName"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            accepts="image/png, image/gif, image/jpeg"
          ></input>

          <button>Submit</button>
        </form>
      </section>
      <Footer />
    </>
  );
}
