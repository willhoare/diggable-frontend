import "./Rewards.scss";

function Rewards({ currentArtist }) {
  return currentArtist.campaigns[0].rewards.map((rewards) => {
    // let first = rewards.first;

    return (
      <section className="rewards__container">
        <div className="rewards__card">
          <h1>{rewards.firstReward}</h1>
          <p className="rewards__value">{rewards.firstRewardValue}</p>
          <div className="diggButton__wrap">
            <button className="diggButton">Digg it</button>
          </div>
        </div>
        <div className="rewards__card">
          <h1>{rewards.secondReward}</h1>
          <p className="rewards__value">{rewards.secondRewardValue}</p>
          <div className="diggButton__wrap">
            <button className="diggButton">Digg it</button>
          </div>
        </div>
        <div className="rewards__card">
          <h1>{rewards.thirdReward}</h1>
          <p className="rewards__value">{rewards.thirdRewardValue}</p>
          <div className="diggButton__wrap">
            <button className="diggButton">Digg it</button>
          </div>
        </div>
        <div className="rewards__card">
          <h1>{rewards.fourthReward}</h1>
          <p className="rewards__value">{rewards.fourthRewardValue}</p>
          <div className="diggButton__wrap">
            <button className="diggButton">Digg it</button>
          </div>
        </div>
        <div className="rewards__card">
          <h1>{rewards.fifthReward}</h1>
          <p className="rewards__value">{rewards.fifthRewardValue}</p>
          <div className="diggButton__wrap">
            <button className="diggButton">Digg it</button>
          </div>
        </div>
      </section>
    );
  });
}

export default Rewards;
