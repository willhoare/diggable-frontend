// import "./Sidebar.scss";
// import Rewards from "../../components/Rewards/Rewards";

// export default Sidebar;

// function Sidebar({ currentArtist }) {
//   return currentArtist.campaigns.map((campaigns) => {
//     let id = campaigns.id[0];
//     let title = campaigns.title;
//     let description = campaigns.description;
//     let goal = campaigns.goal;
//     let tourdates = new Date(campaigns.tourdates).toLocaleDateString();

//     return (
//       <section>
//         <h1></h1>
//         <div className="sidebar__description">
//           <h2>
//             See below for some of the great rewards that{" "}
//             {currentArtist.artistname} has to offer. All items sold will go
//             straight towards funding their next big live tour, and you can help
//             them reach that goal.
//           </h2>
//         </div>
//         <div>
//           <Rewards currentArtist={currentArtist} />
//         </div>
//       </section>
//     );
//   });
// }

import "./Sidebar.scss";
import Rewards from "../../components/Rewards/Rewards";

export default Sidebar;

function Sidebar({ currentArtist }) {
  console.log("Campaigns in Sidebar:", currentArtist.campaigns);

  // Check if currentArtist.campaigns is defined and is an array
  if (
    !currentArtist ||
    !currentArtist.campaigns ||
    !Array.isArray(currentArtist.campaigns)
  ) {
    return null; // You can return null or some other default content here
  }

  return (
    <section>
      <h1>Campaigns</h1>
      <div className="sidebar__description">
        <h2>
          See below for some of the great rewards that{" "}
          {currentArtist.artistname} has to offer. All items sold will go
          straight towards funding their next big live tour, and you can help
          them reach that goal.
        </h2>
      </div>
      {currentArtist.campaigns.map((campaign) => {
        let id = campaign.id; // Use campaign.id directly
        let title = campaign.title;
        let description = campaign.description;
        let goal = campaign.goal;
        let tourdates = new Date(campaign.tourdates).toLocaleDateString();

        return <div key={id}>{/* Render campaign details here */}</div>;
      })}
      <Rewards currentArtist={currentArtist} />
    </section>
  );
}
