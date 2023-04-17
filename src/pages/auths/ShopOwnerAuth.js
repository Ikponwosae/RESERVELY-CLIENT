import { Navigate, useLocation, Outlet } from "react-router-dom";
import AuthService from "../../auth_service";
const { getCurrentUser } = AuthService;
const ShopOwnerAuth = () => {
  const location = useLocation();

  return getCurrentUser().role === "shop-owner" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ShopOwnerAuth;
