import "./App.scss";
import "./styles/partials/_global.scss";
import "./styles/partials/_typography.scss";
import "./styles/partials/_variables.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SignIn from "./pages/SignIn/SignIn";
import CampaignPage from "./pages/SignIn/SignIn";
import CreateCampaign from "./pages/SignIn/SignIn";
import axios from "axios";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>

          <Route path="/campaigns/:id" element={<HomePage />}></Route>
          {/* <Route path="/signin" element={<SignIn />}></Route> */}
          {/* <Route path="/createcampaign" element={<CreateCampaign />}></Route> */}
          {/* <Route path="/campaignpage" element={<CampaignPage />}></Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
