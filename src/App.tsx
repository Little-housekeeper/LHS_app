import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RideSharePage from "./pages/RideSharePage";
import ChooseCarPage from "./pages/ChooseCarPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/rideshare" element={<RideSharePage />} />
        <Route path="/choosecar" element={<ChooseCarPage />} />
      </Routes>
    </>
  );
}

export default App;
