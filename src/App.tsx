import { Route, Routes } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import RideSharePage from "./components/RideSharePage";
import ChooseCarPage from "./components/ChooseCarPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/rideshare" element={<RideSharePage />} />
        <Route path="/choosecar" element={<ChooseCarPage />} />
      </Routes>
    </>
  );
}

export default App;
