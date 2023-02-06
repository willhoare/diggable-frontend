import "./App.scss";
import "./styles/partials/_global.scss";
import "./styles/partials/_typography.scss";
import "./styles/partials/_variables.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
// import SignIn from "./pages/SignIn/SignIn";
import CampaignPage from "./pages/CampaignPage/CampaignPage";
import CreateCampaign from "./pages/CreateCampaign/CreateCampaign";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/artists" />} />
          <Route path="/artists" element={<HomePage />} />
          <Route path="/artists/:id" element={<CampaignPage />} />
          <Route path="/createcampaign" element={<CreateCampaign />} />
          {/* <Route path="/campaigns/:id" element={<HomePage />}></Route> */}
          {/* <Route path="/signin" element={<SignIn />}></Route> */}
          {/* <Route path="/createcampaign" element={<CreateCampaign />}></Route> */}
          {/* <Route path="/campaigns" element={<CampaignPage />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
