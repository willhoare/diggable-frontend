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
  const [artistname, setArtistName] = useState("");
  const [goal, setGoal] = useState("");
  const [description, setDescription] = useState("");
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
  console.log(image);

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("campaignName", campaignName);
    formData.append("artistname", artistname);
    formData.append("goal", goal);
    formData.append("description", description);
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
      <article className="intro">
        <div className="intro__content">
          <h2 className="intro__header">Bring your campaign to life.</h2>
          <p className="intro__paragraph">
            Launch you new live-music campaign today by filling out all the
            details below. This is your chance to give your fans and supporters
            as much information as possible on the upcoming potential tour.
            Where you will be looking to visit and when, and what specific
            rewards you are putting up to tender in return for their support to
            help raise funds for your total financial goal.
            <br /> Digg deep!
          </p>
        </div>
      </article>
      <section className="form">
        <form onSubmit={handleSubmit}>
          <section className="form__wrap">
            <div className="form__left">
              <div className="form__element">
                <p>Campaign Name:</p>
                <input
                  name="campaignName"
                  placeholder="Campaign Name"
                  type="text"
                  onChange={(e) => {
                    setCampaignName(e.target.value);
                  }}
                ></input>
              </div>

              <div className="form__element">
                <p>Artist Name:</p>
                <input
                  name="artistname"
                  placeholder="Artist Name"
                  type="text"
                  onChange={(e) => {
                    setArtistName(e.target.value);
                  }}
                ></input>
              </div>

              <div className="form__element">
                <p>Campaign Goal:</p>
                <input
                  name="goal"
                  placeholder="Financial goal for your campaign "
                  type="number"
                  onChange={(e) => {
                    setGoal(e.target.value);
                  }}
                ></input>
              </div>

              <div className="form__element">
                <p>Artist overview and campaign description:</p>
                <input
                  name="description"
                  placeholder="Give a short description of your campaign"
                  type="text"
                  className="description"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                ></input>
              </div>

              <div className="form__element">
                <p>Anticipated Tourdates:</p>
                <input
                  name="tourdates"
                  placeholder="List and estimate dates that you will be touring"
                  type="text"
                  onChange={(e) => {
                    setTourdates(e.target.value);
                  }}
                ></input>
              </div>

              <div className="form__element">
                <p>Hero Image:</p>
                <input
                  type="file"
                  name="campaignName"
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                  accepts="image/png, image/gif, image/jpeg"
                ></input>
              </div>
            </div>
            <div className="form__right">
              <div className="form__element">
                <p>First Reward:</p>
                <input
                  name="firstReward"
                  placeholder="List the first lowest value reward you will be offering to fans"
                  type="text"
                  onChange={(e) => {
                    setFirstReward(e.target.value);
                  }}
                ></input>
                <p>Value:</p>
                <input
                  className="value"
                  name="firstRewardValue"
                  placeholder="List the price and cost of the first reward avilable to fans"
                  type="number"
                  onChange={(e) => {
                    setFirstRewardValue(e.target.value);
                  }}
                ></input>
              </div>

              <div className="form__element">
                <p>Second Reward:</p>
                <input
                  name="secondReward"
                  placeholder="List the second lowest value reward you will be offering to fans"
                  type="text"
                  onChange={(e) => {
                    setSecondReward(e.target.value);
                  }}
                ></input>
                <p>Value:</p>

                <input
                  name="secondRewardValue"
                  placeholder="List the price and cost of the second reward avilable to fans"
                  className="value"
                  type="number"
                  onChange={(e) => {
                    setSecondRewardValue(e.target.value);
                  }}
                ></input>
              </div>

              <div className="form__element">
                <p>Third Reward:</p>
                <input
                  name="thirdReward"
                  placeholder="List the third lowest value reward you will be offering to fans"
                  type="text"
                  onChange={(e) => {
                    setThirdReward(e.target.value);
                  }}
                ></input>
                <p>Value:</p>

                <input
                  name="thirdRewardValue"
                  placeholder="List the price and cost of the third reward avilable to fans"
                  type="number"
                  className="value"
                  onChange={(e) => {
                    setThirdRewardValue(e.target.value);
                  }}
                ></input>
              </div>
              <div className="form__element">
                <p>Fourth Reward:</p>
                <input
                  name="fourthReward"
                  placeholder="List the fourth lowest value reward you will be offering to fans"
                  type="text"
                  onChange={(e) => {
                    setFourthReward(e.target.value);
                  }}
                ></input>

                <p>Value:</p>

                <input
                  name="fourthRewardValue"
                  placeholder="List the price and cost of the fourth reward avilable to fans"
                  type="number"
                  className="value"
                  onChange={(e) => {
                    setFourthRewardValue(e.target.value);
                  }}
                ></input>
              </div>
              <div className="form__element">
                <p>Fifth Reward:</p>
                <input
                  name="fifthReward"
                  placeholder="List the fifth lowest value reward you will be offering to fans"
                  type="text"
                  onChange={(e) => {
                    setFifthReward(e.target.value);
                  }}
                ></input>
                <p>Value:</p>

                <input
                  name="fifthRewardValue"
                  placeholder="List the price and cost of the fifth reward avilable to fans"
                  type="number"
                  className="value"
                  onChange={(e) => {
                    setFifthRewardValue(e.target.value);
                  }}
                ></input>
              </div>
            </div>
          </section>
          <div className="button__wrap">
            <button className="button">Launch Campaign!</button>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
}
