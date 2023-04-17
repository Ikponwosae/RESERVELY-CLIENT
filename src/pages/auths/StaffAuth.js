import { Navigate, useLocation, Outlet } from "react-router-dom";
import AuthService from "../../auth_service";
const { getCurrentUser } = AuthService;
const StaffAuth = () => {
  const location = useLocation();

  return getCurrentUser().role === "staff" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default StaffAuth;
