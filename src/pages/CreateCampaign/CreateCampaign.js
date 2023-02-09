import "./CreateCampaign.scss";
import "../CreateCampaign/bootstrap.min.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

// trying to add the upload image functionality //

export default function CreateCampaign() {
  const [newCampaign, setNewCampaign] = useState();
  const [newProfilePhoto, setProfilePhoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const submit = e.target;

    const title = submit.title.value;
    const description = submit.description.value;
    const goal = submit.goal.value;
    const tourdates = submit.tourdates.value;
    const first = submit.first.value;
    const firstvalue = submit.firstvalue.value;

    const profileimage = submit.profileimage.value;

    const second = submit.second.value;
    const secondvalue = submit.second.value;

    const third = submit.third.value;
    const thirdvalue = submit.thirdvalue.value;

    const fourth = submit.fourth.value;
    const fourthvalue = submit.fourthvalue.value;

    const fifth = submit.fifth.value;
    const fifthvalue = submit.fifthvalue.value;

    const newCampaign = {};

    //image upload code //

    console.log(e.target.profileimage.value);

    const formData = new FormData();
    formData.append("testimage", profileimage);

    console.log(formData);

    const updateProfilePhoto = async () => {
      await axios.post(`http://localhost:8080/upload`, formData);
    };
    updateProfilePhoto();

    ////////////////////

    if (!title || !description) {
      alert("Please fill out all fields.");
      return;
    } else {
      axios
        .post("http://localhost:8080/artists", {
          title,
          description,
          goal,
          tourdates,
          profileimage,
          first,
          firstvalue,
          second,
          secondvalue,
          third,
          thirdvalue,
          fourth,
          fourthvalue,
          fifth,
          fifthvalue,
        })
        .then(setNewCampaign(newCampaign));
    }
    alert("Campaign created successfully!");
    // window.location = "/";
  };

  return (
    <>
      <Header />
      <form
        onSubmit={handleSubmit}
        type="file"
        method="POST"
        action="http://localhost:8080/upload"
        encType="multipart/form-data"
        // onChange={(e) => setProfilePhoto(e.target.files[0])}
      >
        <div className="form">
          <div className="form__wrap">
            <div>
              <input
                name="artist Name"
                id="artist"
                placeholder="Artist name"
              ></input>
            </div>

            <div>
              <input
                label="title"
                type="text"
                name="title"
                id="title"
                placeholder="Add a title for your campaign"
              ></input>
            </div>

            <div>
              <input
                type="text"
                name="description"
                id="description"
                placeholder="Add a brief description of what you will be touring and where."
              ></input>
            </div>

            <div>
              <input
                type="number"
                name="goal"
                id="goal"
                placeholder="how much money are you trying to raise"
              ></input>
            </div>

            <div>
              <input
                type="text"
                name="tourdates"
                id="tourdates"
                placeholder="what estimate date will you be embarking on the tours"
              ></input>
            </div>

            <div>
              <input type="range"></input>
            </div>

            <div>
              <input
                onChange={(e) => setProfilePhoto(e.target.files[0])}
                type="file"
                name="testimage"
                id="profileimage"
              ></input>
            </div>

            <div>
              <input
                type="textarea"
                name="tour locations"
                id="locations"
                placeholder="List a few of the locations you'll be hoping to visit on the tour."
              ></input>
            </div>

            <div>
              <input
                type="textarea"
                name="reward 1"
                id="first"
                placeholder="First reward available to those who donate money to your campaign."
              ></input>
              <input type="number" id="firstvalue"></input>
            </div>

            <div>
              <input
                type="textarea"
                name="reward 2"
                id="second"
                placeholder="Second reward available to those who donate money to your campaign."
              ></input>
              <input type="number" id="secondvalue"></input>
            </div>

            <div>
              <input
                type="textarea"
                name="reward 3"
                id="third"
                placeholder="Third reward available to those who donate money to your campaign."
              ></input>
              <input type="number" id="thirdvalue"></input>
            </div>

            <div>
              <input
                type="textarea"
                name="reward 4"
                id="fourth"
                placeholder="Fourth reward available to those who donate money to your campaign."
              ></input>
              <input type="number" id="fourthvalue"></input>
            </div>

            <div>
              <input
                type="textarea"
                name="reward 5"
                id="fifth"
                placeholder="Fifth reward available to those who donate money to your campaign."
              ></input>
              <input type="number" id="fifthvalue"></input>
            </div>

            <button>Submit</button>
          </div>
        </div>
      </form>

      <div>
        <form
          type="file"
          method="POST"
          action="http://localhost:8080/upload"
          encType="multipart/form-data"
          onChange={(e) => setProfilePhoto(e.target.files[0])}
        >
          <input type="file" name="testimage"></input>
          <input type="submit"></input>
        </form>
      </div>

      <Footer />
    </>
  );
}
