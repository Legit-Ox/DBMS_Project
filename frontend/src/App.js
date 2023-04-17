import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import LandingPage from "./pages/customer/LandingPage";
import SingleRestaurantPage from "./pages/customer/SingleRestaurantPage";
import owner_home from "./pages/restaurant/owner_home";
import Dashboard from "./pages/restaurant/dashboard";
import Home from "./pages/restaurant/home";
import Login from "./pages/restaurant/login";
import Register from "./pages/restaurant/register";
import { useSelector } from "react-redux";
import HomePage from "./pages/customer/HomePage";
import OwnerHome from "./pages/restaurant/owner_home";
import Rough from "./pages/restaurant/rough";
import Landing2 from "./pages/landing2";
const PrivateRoutes = () => {
  const { isAuth } = useSelector((state) => state.auth);

  return <>{isAuth ? <Outlet /> : <Navigate to="/login" />}</>;
};

const RestrictedRoutes = () => {
  const { isAuth } = useSelector((state) => state.auth);

  return <>{!isAuth ? <Outlet /> : <Navigate to="/dashboard" />}</>;
};
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/single" element={<SingleRestaurantPage />} />
        <Route path="/home2" element={<Home />} />
        <Route path="/restaurant/:id" element={<SingleRestaurantPage />} />
        <Route path="/ownerHome" element={<OwnerHome />} />
        <Route path="/private" element={<Rough />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route element={<RestrictedRoutes />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          
        </Route>
        <Route path="/landing2" element={<Landing2 />} />
      </Routes>
    </div>
  );
}
export default App;
