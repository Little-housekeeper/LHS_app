import { createContext } from "react";

interface IDataContext {
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
}

const DataContext = createContext<IDataContext>({
  data: {},
  setData: () => {},
});

export default DataContext;
