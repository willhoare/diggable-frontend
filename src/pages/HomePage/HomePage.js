import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./HomePage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default HomePage;

function HomePage({ videos }) {
  const [currentVideo, setCurrentVideo] = useState(null);
  const params = useParams();
  const id = params.id || "84e96018-4022-434e-80bf-000ce4cd12b8";

  //   useEffect(() => {
  //     const getVid = async () => {
  //       const { data } = await axios.get(`http://localhost:8080/videos/${id}`);
  //       setCurrentVideo(data);
  //     };
  //     getVid();
  //   }, [id]);

  //   const [removeVid, setNextVideos] = useState([]);

  //   useEffect(() => {
  //     const getVids = async () => {
  //       const { data } = await axios.get(`http://localhost:8080/videos`);
  //       const vidData = data.filter((vid) => vid.id !== params.id);
  //       setNextVideos(vidData);
  //     };
  //     getVids();
  //   }, [id]);

  //   if (!currentVideo) {
  //     return <h1 className="Loading">Loading...</h1>;
  //   }
  return (
    <>
      <Header />
      <h1>Hello there</h1>
    </>
  );
}
