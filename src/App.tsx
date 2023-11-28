import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RideSharePage from "./pages/RideSharePage";
import ChooseCarPage from "./pages/ChooseCarPage";
import FeesPage from "./pages/FeesPage";
import ChooseTimePage from "./pages/ChooseTimePage";
import ConfirmationPage from "./pages/ConfirmationPage";
import ActivityDetailsPage from "./pages/ActivityDetailsPage";
import AwaitingDriverPage from "./pages/AwaitingDriverPage";
import ScheduleRide from "./pages/ScheduleRide";
import DriverHomePage from "./pages/DriverHomePage";
import AccountPage from "./pages/AccountPage";
import SignUpPage from "./pages/SignUpPage";
import SignUpConfirmationPage from "./pages/SignUpConfirmationPage";
import DataContext from "./context/DataContext";

function App() {
  const [data, setData] = useState<any>({
    scheduledDate: "",
    rideFrom: "LAX International Airport",
    rideTo: "",
    chosenCar: {},
    chosenTime: "",
  }); // Update the type here

  return (
    <>
      <AuthContextProvider>
        <DataContext.Provider
          value={{
            data: data,
            setData: setData,
          }}
        >
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
            <Route path="/scheduleride" element={<ScheduleRide />} />
            <Route path="/driverhomepage" element={<DriverHomePage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route
              path="/signconfirmation"
              element={<SignUpConfirmationPage />}
            />
          </Routes>
        </DataContext.Provider>
      </AuthContextProvider>
    </>
  );
}

export default App;
