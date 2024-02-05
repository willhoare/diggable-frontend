// import "./Rewards.scss";
// import CheckoutButton from "../CheckoutButton/CheckoutButton";

// function Rewards({ currentArtist }) {
//   return currentArtist.campaigns[0].rewards.map((rewards) => {
//     return (
//       <section className="rewards__container">
// <div className="rewards__card">
//   <h3>{rewards.firstReward}</h3>
//   <p className="rewards__value">${rewards.firstRewardValue}</p>
//   <div className="diggButton__wrap">
//     <CheckoutButton />
//   </div>
// </div>
// <div className="rewards__card">
//   <h3>{rewards.secondReward}</h3>
//   <p className="rewards__value">${rewards.secondRewardValue}</p>
//   <div className="diggButton__wrap">
//     <CheckoutButton />{" "}
//   </div>
// </div>
// <div className="rewards__card">
//   <h3>{rewards.thirdReward}</h3>
//   <p className="rewards__value">${rewards.thirdRewardValue}</p>
//   <div className="diggButton__wrap">
//     <CheckoutButton />{" "}
//   </div>
// </div>
// <div className="rewards__card">
//   <h3>{rewards.fourthReward}</h3>
//   <p className="rewards__value">${rewards.fourthRewardValue}</p>
//   <div className="diggButton__wrap">
//     <CheckoutButton />{" "}
//   </div>
// </div>
// <div className="rewards__card">
//   <h3>{rewards.fifthReward}</h3>
//   <p className="rewards__value">${rewards.fifthRewardValue}</p>
//   <div className="diggButton__wrap">
//     <CheckoutButton />{" "}
//   </div>
// </div>
//       </section>
//     );
//   });
// }

// export default Rewards;
import React, { useEffect, useState } from "react";
import axios from "axios";
import CheckoutButton from "../CheckoutButton/CheckoutButton";

function Rewards({ currentArtist }) {
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    const fetchRewards = async () => {
      if (!currentArtist || !currentArtist.id) {
        console.log("Artist ID not available for fetching rewards.");
        return;
      }

      try {
        // Adjust the URL to include a query parameter for filtering by artist ID
        const response = await axios.get(
          `http://localhost:8080/rewards?artistId=${currentArtist.id}`
        );

        console.log("Filtered Rewards data received:", response.data);
        setRewards(response.data);
      } catch (error) {
        console.error("Error fetching rewards:", error);
      }
    };

    fetchRewards();
  }, [currentArtist]); // Depend on currentArtist to refetch when it changes

  return (
    <div className="rewards__container">
      {rewards.length > 0 ? (
        rewards.map((reward, index) => (
          <div className="rewards__card" key={index}>
            <h3>{reward.firstReward}</h3>
            <p className="rewards__value">${reward.firstRewardValue}</p>
            <div className="diggButton__wrap">
              <CheckoutButton />
            </div>
            <div className="rewards__card" key={index + 1}>
              <h3>{reward.secondReward}</h3>
              <p className="rewards__value">${reward.secondRewardValue}</p>
              <div className="diggButton__wrap">
                <CheckoutButton />
              </div>
            </div>
            <div className="rewards__card" key={index + 2}>
              <h3>{reward.thirdReward}</h3>
              <p className="rewards__value">${reward.thirdRewardValue}</p>
              <div className="diggButton__wrap">
                <CheckoutButton />
              </div>
            </div>
            <div className="rewards__card" key={index + 3}>
              <h3>{reward.fourthReward}</h3>
              <p className="rewards__value">${reward.fourthRewardValue}</p>
              <div className="diggButton__wrap">
                <CheckoutButton />
              </div>
            </div>
            <div className="rewards__card" key={index + 4}>
              <h3>{reward.fifthReward}</h3>
              <p className="rewards__value">${reward.fourthRewardValue}</p>
              <div className="diggButton__wrap">
                <CheckoutButton />
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No rewards data available for this artist.</p>
      )}
    </div>
  );
}

export default Rewards;
