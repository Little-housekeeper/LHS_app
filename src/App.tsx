import { Route, Routes } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import RideSharePage from "./components/RideSharePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/rideshare" element={<RideSharePage />} />
      </Routes>
    </>
  );
}

export default App;
