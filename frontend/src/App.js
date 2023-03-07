import MerchantMock from "./pages/merchantMock";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/customer/LandingPage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/merchant" element={<MerchantMock />} />
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
    </div>
  );
}
export default App;
