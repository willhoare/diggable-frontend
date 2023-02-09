import axios from "axios";
import { useState, useEffect } from "react";

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

  return isLoading ? <h1>Loading...</h1> : <h1>Welcome {userInfo.name}!</h1>;
}

export default Profile;
