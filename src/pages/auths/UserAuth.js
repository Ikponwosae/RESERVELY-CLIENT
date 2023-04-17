import { Navigate, useLocation, Outlet } from "react-router-dom";
import AuthService from "../../auth_service";
const { getCurrentUser } = AuthService;
const UserAuth = () => {
  const location = useLocation();

  return getCurrentUser().role === "user" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default UserAuth;
