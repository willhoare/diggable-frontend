import "./Sidebar.scss";
import Rewards from "../../components/Rewards/Rewards";

export default Sidebar;

function Sidebar({ currentArtist }) {
  return currentArtist.campaigns.map((campaigns) => {
    let id = campaigns.id[0];
    let title = campaigns.title;
    let description = campaigns.description;
    let goal = campaigns.goal;
    let tourdates = new Date(campaigns.tourdates).toLocaleDateString();

    console.log(title);

    return (
      <section>
        <h1></h1>
        <div>
          <h2>{description}</h2>
        </div>
      </section>
    );
  });
}
