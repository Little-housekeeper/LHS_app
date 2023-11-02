import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RideSharePage from "./pages/RideSharePage";
import ChooseCarPage from "./pages/ChooseCarPage";
import FeesPage from "./pages/FeesPage";
import ChooseTimePage from "./pages/ChooseTimePage";
import ConfirmationPage from "./pages/ConfirmationPage";
import ActivityDetailsPage from "./pages/ActivityDetailsPage";
import AwaitingDriverPage from "./pages/AwaitingDriverPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/rideshare" element={<RideSharePage />} />
        <Route path="/choosecar" element={<ChooseCarPage />} />
        <Route path="/fees" element={<FeesPage />} />
        <Route path="/choosetime" element={<ChooseTimePage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/activitydetails" element={<ActivityDetailsPage />} />
        <Route path="/awaitingdriver" element={<AwaitingDriverPage />} />
      </Routes>
    </>
  );
}

export default App;
