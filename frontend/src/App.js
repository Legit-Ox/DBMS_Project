import MerchantMock from "./pages/merchantMock";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/customer/LandingPage";
import SingleRestaurantPage from "./pages/customer/SingleRestaurantPage";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/merchant" element={<MerchantMock />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/single" element={<SingleRestaurantPage />} />
      </Routes>
    </div>
  );
}
export default App;
