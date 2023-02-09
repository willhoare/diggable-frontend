import "./Rewards.scss";

function Rewards({ currentArtist }) {
  return currentArtist.campaigns[0].rewards.map((rewards) => {
    // let first = rewards.first;

    return (
      <section className="rewards__container">
        <div className="rewards__card">
          <h1>{rewards.first}</h1>
          <p className="rewards__value">{rewards.firstvalue}</p>
          <button>Digg it</button>
        </div>
        <div className="rewards__card">
          <h1>{rewards.second}</h1>
          <p className="rewards__value">{rewards.secondvalue}</p>
        </div>
        <div className="rewards__card">
          <h1>{rewards.third}</h1>
          <p className="rewards__value">{rewards.thirdvalue}</p>
        </div>
        <div className="rewards__card">
          <h1>{rewards.fourth}</h1>
          <p className="rewards__value">{rewards.fourthvalue}</p>
        </div>
        <div className="rewards__card">
          <h1>{rewards.fifth}</h1>
          <p className="rewards__value">{rewards.fifthvalue}</p>
        </div>
        <div className="rewards__card">
          <h1>{rewards.sixth}</h1>
          <p className="rewards__value">{rewards.sixthvalue}</p>
        </div>
        <div className="rewards__card">
          <h1>{rewards.seventh}</h1>
          <p className="rewards__value">{rewards.seventhvalue}</p>
        </div>
        <div className="rewards__card">
          <h1>{rewards.eighth}</h1>
          <p className="rewards__value">{rewards.eighthvalue}</p>
        </div>
        <div className="rewards__card">
          <h1>{rewards.ninth}</h1>
          <p className="rewards__value">{rewards.ninthvalue}</p>
        </div>
        <div className="rewards__card">
          <h1>{rewards.tenth}</h1>
          <p className="rewards__value">{rewards.tenthvalue}</p>
        </div>
      </section>
    );
  });
}

export default Rewards;
