import { createContext } from "react";

interface IDataContext {
  rideData: any;
  setRideData: React.Dispatch<React.SetStateAction<any>>;
  customerData: any;
  driverData: any;
}

const DataContext = createContext<IDataContext>({
  rideData: {},
  setRideData: () => {},
  customerData: [],
  driverData: []
});

export default DataContext;
