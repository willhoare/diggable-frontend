import "./CreateCampaignNew.scss";
import "../CreateCampaign/bootstrap.min.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

// trying to add the upload image functionality //

export default function CreateCampaignNew() {
  const [heroImage, setHeroImage] = useState(null);
  const [campaignName, setCampaignName] = useState("");
  const [artistname, setArtistName] = useState("");
  const [goal, setGoal] = useState("");
  const [description, setDescription] = useState("");
  const [story, setStory] = useState("");

  const [tourdates, setTourdates] = useState("");
  const [firstReward, setFirstReward] = useState("");
  const [firstRewardValue, setFirstRewardValue] = useState("");
  const [secondReward, setSecondReward] = useState("");
  const [secondRewardValue, setSecondRewardValue] = useState("");
  const [thirdReward, setThirdReward] = useState("");
  const [thirdRewardValue, setThirdRewardValue] = useState("");
  const [fourthReward, setFourthReward] = useState("");
  const [fourthRewardValue, setFourthRewardValue] = useState("");
  const [fifthReward, setFifthReward] = useState("");
  const [fifthRewardValue, setFifthRewardValue] = useState("");

  console.log(campaignName);
  console.log(heroImage);

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("heroImage", heroImage);
    formData.append("campaignName", campaignName);
    formData.append("artistname", artistname);
    formData.append("goal", goal);
    formData.append("description", description);
    formData.append("story", story);

    formData.append("tourdates", tourdates);
    formData.append("firstReward", firstReward);
    formData.append("firstRewardValue", firstRewardValue);
    formData.append("secondReward", secondReward);
    formData.append("secondRewardValue", secondRewardValue);
    formData.append("thirdReward", thirdReward);
    formData.append("thirdRewardValue", thirdRewardValue);
    formData.append("fourthReward", fourthReward);
    formData.append("fourthRewardValue", fourthRewardValue);
    formData.append("fifthReward", fifthReward);
    formData.append("fifthRewardValue", fifthRewardValue);

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
          <div className="leftHalf">
            <div className="form__element">
              <p className="form__identifiers">Campaign Name:</p>
              <input
                name="campaignName"
                placeholder="Campaign Name"
                type="text"
                className="form__inputs"
                label="Campaign Name:"
                onChange={(e) => {
                  setCampaignName(e.target.value);
                }}
              ></input>
            </div>

            <div className="form__element">
              <p className="form__identifiers">Artist Name:</p>

              <input
                className="form__inputs"
                name="artistname"
                placeholder="Artist Name"
                type="text"
                onChange={(e) => {
                  setArtistName(e.target.value);
                }}
              />
            </div>

            <div className="form__element">
              <p className="form__identifiers">Goal Total:</p>

              <input
                name="goal"
                className="form__inputs"
                placeholder="Financial goal for your campaign "
                type="text"
                onChange={(e) => {
                  setGoal(e.target.value);
                }}
              ></input>
            </div>

            <div className="form__element">
              <p className="form__identifiers">Description:</p>

              <input
                name="description"
                placeholder="Give a short description of your campaign"
                type="text"
                className="form__inputs"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></input>
            </div>

            <div className="form__element">
              <p className="form__identifiers">Story:</p>

              <input
                name="story"
                className="form__inputs"
                placeholder="Please give a bit more detailed background on your music and your act as well as why you are looking to tour and more details on when. This is your chance to let the public know if your own words why they should support your upcoming tour, a great chance to mention upcoming albums and singles and available merchandise."
                type="text"
                onChange={(e) => {
                  setStory(e.target.value);
                }}
              ></input>
            </div>

            <div className="form__element">
              <p className="form__identifiers">Tour Dates:</p>

              <input
                name="tourdates"
                className="form__inputs"
                placeholder="List and estimate dates that you will be touring"
                type="text"
                onChange={(e) => {
                  setTourdates(e.target.value);
                }}
              ></input>
            </div>

            <div className="form__element">
              <input
                type="file"
                className="form__inputs"
                name="campaignName"
                onChange={(e) => {
                  setHeroImage(e.target.files[0]);
                }}
                accepts="image/png, image/gif, image/jpeg"
              ></input>
            </div>
          </div>
          <div className="rightHalf">
            <div className="form__element">
              <p className="form__identifiers">First reward on offer:</p>

              <input
                name="firstReward"
                placeholder="List the first lowest value reward you will be offering to fans"
                type="text"
                onChange={(e) => {
                  setFirstReward(e.target.value);
                }}
              ></input>
              <div>
                <input
                  name="firstRewardValue"
                  className="value"
                  placeholder="List the price and cost of the first reward avilable to fans"
                  type="text"
                  onChange={(e) => {
                    setFirstRewardValue(e.target.value);
                  }}
                ></input>
              </div>
            </div>

            <input
              name="secondReward"
              placeholder="List the second lowest value reward you will be offering to fans"
              type="text"
              onChange={(e) => {
                setSecondReward(e.target.value);
              }}
            ></input>
            <input
              name="secondRewardValue"
              placeholder="List the price and cost of the second reward avilable to fans"
              type="text"
              className="value"
              onChange={(e) => {
                setSecondRewardValue(e.target.value);
              }}
            ></input>

            <input
              name="thirdReward"
              placeholder="List the third lowest value reward you will be offering to fans"
              type="text"
              onChange={(e) => {
                setThirdReward(e.target.value);
              }}
            ></input>
            <input
              name="thirdRewardValue"
              placeholder="List the price and cost of the third reward avilable to fans"
              type="text"
              className="value"
              onChange={(e) => {
                setThirdRewardValue(e.target.value);
              }}
            ></input>

            <input
              name="fourthReward"
              placeholder="List the fourth lowest value reward you will be offering to fans"
              type="text"
              onChange={(e) => {
                setFourthReward(e.target.value);
              }}
            ></input>
            <input
              name="fourthRewardValue"
              placeholder="List the price and cost of the fourth reward avilable to fans"
              type="text"
              className="value"
              onChange={(e) => {
                setFourthRewardValue(e.target.value);
              }}
            ></input>

            <input
              name="fifthReward"
              placeholder="List the fifth lowest value reward you will be offering to fans"
              type="text"
              onChange={(e) => {
                setFifthReward(e.target.value);
              }}
            ></input>
            <input
              name="fifthRewardValue"
              placeholder="List the price and cost of the fifth reward avilable to fans"
              type="text"
              className="value"
              onChange={(e) => {
                setFifthRewardValue(e.target.value);
              }}
            ></input>
          </div>
        </form>
        <button>Submit</button>
      </section>
      <Footer />
    </>
  );
}
