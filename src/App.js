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
import AllCampaigns from "./pages/AllCampaigns/AllCampaigns";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import CreateCampaignNew from "./pages/CreateCampaignNew/CreateCampaignNew";

const baseUrl = "http://localhost:8080";
const signupUrl = `${baseUrl}/signup`;
const loginUrl = `${baseUrl}/login`;

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/artists" />} />
          <Route path="/artists" element={<HomePage />} />
          <Route path="/artists/:id" element={<CampaignPage />} />
          <Route path="/createcampaign" element={<CreateCampaign />} />
          <Route path="/allcampaigns" element={<AllCampaigns />} />
          <Route path="/allcampaigns/:id" element={<CreateCampaign />} />
          <Route path="/createcampaignnew" element={<CreateCampaignNew />} />

          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>

          {/* <Route path="/createcampaign" element={<CreateCampaign />}></Route> */}
          <Route path="/campaigns" element={<AllCampaigns />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
