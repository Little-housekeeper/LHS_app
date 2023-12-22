import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { getCustomer, getDriver } from "./utils/ApiUtils.js";
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
import SignUpPage from "./pages/SignUpPage";
import SignUpConfirmationPage from "./pages/SignUpConfirmationPage";
import DataContext from "./context/DataContext";
import CodeConfirmation from "./pages/CodeConfirmation";
import SignUpByPhone from "./pages/SignUpByPhone";
import AccountPage from "./pages/AccountPage";

function App() {
  const [rideData, setRideData] = useState<any>({
    scheduled_date: "",
    ride_from: "LAX International Airport",
    ride_to: "",
    driver_id: -1,
    chosen_time: "",
  }); // Update the type here

  const [customerData, setCustomerData] = useState<any>([]);
  useEffect(() => {
    getCustomer().then((res) => setCustomerData(res));
  }, []);

  const [driverData, setDriverData] = useState<any>([]);
  useEffect(() => {
    getDriver().then((res) => setDriverData(res));
  }, []);

  console.log('driver', driverData)

  return (
    <>
      <AuthContextProvider>
        <DataContext.Provider
          value={{
            rideData: rideData,
            setRideData: setRideData,
            customerData: customerData,
            driverData: driverData,
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
            <Route
              path="/activitydetails/:id"
              element={<ActivityDetailsPage />}
            />
            <Route path="/awaitingdriver" element={<AwaitingDriverPage />} />
            <Route path="/scheduleride" element={<ScheduleRide />} />
            <Route path="/driverhomepage" element={<DriverHomePage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route
              path="/signconfirmation"
              element={<SignUpConfirmationPage />}
            />
            <Route path="/signupbyphone" element={<SignUpByPhone />} />
            <Route path="/codeconfirmation" element={<CodeConfirmation />} />
          </Routes>
        </DataContext.Provider>
      </AuthContextProvider>
    </>
  );
}

export default App;
