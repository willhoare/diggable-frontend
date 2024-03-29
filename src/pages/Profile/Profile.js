import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArtistCard from "../../components/ArtistCard/ArtistCard";

const baseUrl = "http://localhost:8080";
const profileUrl = `${baseUrl}/profile`;

function Profile() {
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({});
  const token = sessionStorage.getItem("token");
  // setUserInfo();
  // console.log(token);

  useEffect(() => {
    // Here grab the token from sessionStorage and then make an axios request to profileUrl endpoint.
    // Remember to include the token in Authorization header
    axios
      .get(profileUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setUserInfo(data);
        setIsLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <h1>Welcome Back {userInfo.name}!</h1>
      <section>
        <div className="profile__wrap">
          <div className="profile">
            <h1 className="profile__header">
              Explore other campaigns below or launch your own campaign by
              clickcing here:
            </h1>
            <Link to={`/allcampaigns/`}>
              <button className="profile__buttons">
                Launch your new Diggs
              </button>
            </Link>
          </div>
        </div>
        {/* <div>
          <ArtistCard />
        </div> */}
      </section>
    </>
  );
}

export default Profile;
