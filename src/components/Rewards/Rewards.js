import "./Rewards.scss";

function Rewards({ currentArtist }) {
  return currentArtist.campaigns[0].rewards.map((rewards) => {
    // let first = rewards.first;

    return (
      <section>
        <h1>{rewards.first}</h1>
        <h1>{rewards.second}</h1>
        <h1>{rewards.third}</h1>
        <h1>{rewards.fourth}</h1>
        <h1>{rewards.fifth}</h1>
        <h1>{rewards.sixth}</h1>
        <h1>{rewards.seventh}</h1>
        <h1>{rewards.eighth}</h1>
        <h1>{rewards.ninth}</h1>
        <h1>{rewards.tenth}</h1>
      </section>
    );
  });
}

export default Rewards;
