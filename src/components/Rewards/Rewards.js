import "./Rewards.scss";
import CheckoutButton from "../CheckoutButton/CheckoutButton";

function Rewards({ currentArtist }) {
  return currentArtist.campaigns[0].rewards.map((rewards) => {
    // let first = rewards.first;

    return (
      <section className="rewards__container">
        <div className="rewards__card">
          <h3>{rewards.firstReward}</h3>
          <p className="rewards__value">{rewards.firstRewardValue}</p>
          <div className="diggButton__wrap">
            <CheckoutButton />
          </div>
        </div>
        <div className="rewards__card">
          <h3>{rewards.secondReward}</h3>
          <p className="rewards__value">{rewards.secondRewardValue}</p>
          <div className="diggButton__wrap">
            <CheckoutButton />{" "}
          </div>
        </div>
        <div className="rewards__card">
          <h3>{rewards.thirdReward}</h3>
          <p className="rewards__value">{rewards.thirdRewardValue}</p>
          <div className="diggButton__wrap">
            <CheckoutButton />{" "}
          </div>
        </div>
        <div className="rewards__card">
          <h3>{rewards.fourthReward}</h3>
          <p className="rewards__value">{rewards.fourthRewardValue}</p>
          <div className="diggButton__wrap">
            <CheckoutButton />{" "}
          </div>
        </div>
        <div className="rewards__card">
          <h3>{rewards.fifthReward}</h3>
          <p className="rewards__value">{rewards.fifthRewardValue}</p>
          <div className="diggButton__wrap">
            <CheckoutButton />{" "}
          </div>
        </div>
      </section>
    );
  });
}

export default Rewards;
