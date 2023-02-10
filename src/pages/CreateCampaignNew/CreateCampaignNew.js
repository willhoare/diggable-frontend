import "./CreateCampaignNew.scss";
import "../CreateCampaign/bootstrap.min.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

// trying to add the upload image functionality //

export default function CreateCampaignNew() {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const uploadFile = async (e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);

    try {
      const res = await axios.post("http://localhost:8080/upload", formData);
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <>
      <Header />
      <h2>Campaign upload section</h2>

      <div className="App">
        <input type="file" onChange={saveFile} />
        <button onClick={uploadFile}>Upload</button>
      </div>
      <Footer />
    </>
  );
}
