import { Navigate, Outlet } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
const PrivateRoutes = () => {
  const { user } = UserAuth();
  return user ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
