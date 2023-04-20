import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import LandingPage from "./pages/customer/LandingPage";
import SingleRestaurantPage from "./pages/customer/SingleRestaurantPage";
import Dashboard from "./pages/restaurant/dashboard";
import Home from "./pages/restaurant/home";
import Login from "./pages/restaurant/login";
import Register from "./pages/restaurant/register";
import { useSelector } from "react-redux";
import HomePage from "./pages/customer/HomePage";
import OwnerHome from "./pages/restaurant/owner_home";
import MenuRs from "./pages/restaurant/menu_res";
import OrderRs from "./pages/restaurant/order_rs";
import TableRs from "./pages/restaurant/table_rs";
import CustomerRs from "./pages/restaurant/customer_rs";
import Rough from "./pages/restaurant/rough";
import Landing2 from "./pages/landing2";
import CreateRestaurant from "./pages/restaurant/createRestaurant";
import CreateMenu from "./pages/restaurant/createMenu";
import CreateTable from "./pages/restaurant/createTable";
import CreateMenuItem from "./pages/restaurant/createMenuItem";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/landing2" element={<Landing2 />} />
        <Route path="/landing" element={<LandingPage />} />

        <Route path="/single" element={<SingleRestaurantPage />} />
        <Route path="/home2" element={<Home />} />
        <Route path="/restaurant/:id" element={<SingleRestaurantPage />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ownerHome" element={<OwnerHome />} />
        <Route path="/menu" element={<MenuRs />} />
        <Route path="/orders" element={<OrderRs />} />
        <Route path="/table" element={<TableRs />} />
        <Route path="/customer" element={<CustomerRs />} />
        <Route path="/private" element={<Rough />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/homepage" element={<HomePage />} />
        <Route path="/createRestaurant" element={<CreateRestaurant />} />
        <Route path="/createMenu" element={<CreateMenu />} />
        <Route path="/createTable" element={<CreateTable />} />
        <Route path="/createMenuItem" element={<CreateMenuItem />} />
      </Routes>
    </div>
  );
}
export default App;
