import "./EditCampaignPage.scss";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const BASE_API_URL = "http://localhost:8080/artists";

export default function EditCampaignPage() {
  document.title = "Edit Campaign - Diggable";
  const [artistName, setArtistName] = useState("");
  const [artistInfo, setArtistInfo] = useState({});
  const navigate = useNavigate();
  let { id } = useParams();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    try {
      async function getArtistName() {
        const { data } = await axios.get(`${BASE_API_URL}/warehouses/${id}`);
        setArtistName(data.artistname);
        console.log(artistname);
      }
      getArtistName();
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  const handleChange = (event) => {
    setArtistInfo({
      ...artistInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {
      //   city,
      //   country,
      //   artistname,
    } = artistInfo;

    if (
      //   !city ||,
      //   !country ||
      !artistname ||
      !campaignName
    ) {
      alert("All fields are required");
    } else {
      updatedWarehouse();
      navigate(`/warehouses`);
    }
  };

  const updatedArtist = async () => {
    try {
      const snakedWarehouseInfo = Object.keys(warehouseInfo).reduce(
        (snaked, key) => {
          snaked[snakeCase(key)] = warehouseInfo[key];
          return snaked;
        }
      );

      const request = await axios.put(
        `${BASE_API_URL}/warehouses/${id}`,
        snakedWarehouseInfo
      );
      console.log(request.data);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const handleCancel = () => {
    navigate("/artists");
  };

  return (
    <>
      <Header />
      <section className="form">
        <form onSubmit={handleSubmit}>
          <section className="form__wrap">
            <div className="form__left">
              <div className="form__element">
                <p>Campaign Name:</p>
                <input
                  name="campaignName"
                  placeholder="Campaign Name"
                  className="campaignInput"
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
                  className="campaignInput"
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
                  className="campaignInput"
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
                  className="campaignInput"
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
                  className="campaignInput"
                  onChange={(e) => {
                    setFirstReward(e.target.value);
                  }}
                ></input>
                <p>Value:</p>
                <input
                  className="value"
                  name="firstRewardValue"
                  placeholder="$"
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
                  className="campaignInput"
                  placeholder="List the second lowest value reward you will be offering to fans"
                  type="text"
                  onChange={(e) => {
                    setSecondReward(e.target.value);
                  }}
                ></input>
                <p>Value:</p>

                <input
                  name="secondRewardValue"
                  placeholder="$"
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
                  className="campaignInput"
                  placeholder="List the third lowest value reward you will be offering to fans"
                  type="text"
                  onChange={(e) => {
                    setThirdReward(e.target.value);
                  }}
                ></input>
                <p>Value:</p>

                <input
                  name="thirdRewardValue"
                  placeholder="$"
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
                  className="campaignInput"
                  onChange={(e) => {
                    setFourthReward(e.target.value);
                  }}
                ></input>

                <p>Value:</p>

                <input
                  name="fourthRewardValue"
                  placeholder="$"
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
                  className="campaignInput"
                  type="text"
                  onChange={(e) => {
                    setFifthReward(e.target.value);
                  }}
                ></input>
                <p>Value:</p>

                <input
                  name="fifthRewardValue"
                  placeholder="$"
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
