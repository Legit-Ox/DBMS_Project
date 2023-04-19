import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProtectedInfo, onLogout } from "../../api/auth";
import Layout from "../../components/layout";
import { unauthenticateUser } from "../../redux/slices/authSlice";
import LandingPage from "../customer/LandingPage";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(null);
  const [isOwner, setIsOwner] = useState(false);
  const [protectedData, setProtectedData] = useState(null);
  const navigate = useNavigate();
  const logout = async () => {
    try {
      await onLogout();
      navigate("/login");
      dispatch(unauthenticateUser());
      localStorage.removeItem("isAuth");
    } catch (error) {
      console.log(error.response);
    }
  };

  const protectedInfo = async () => {
    try {
      const { data } = await fetchProtectedInfo();

      setProtectedData(data.user);
      setIsOwner(data.isowner);

      setLoading(false);
    } catch (error) {
      logout();
    }
  };

  useEffect(() => {
    protectedInfo();
  }, []);

  return loading ? (
    <Layout>
      <h1>Loading...</h1>
    </Layout>
  ) : (
    <div>
      <Layout>
        <h1>Dashboard</h1>
        <h2>{protectedData}</h2>
        <button onClick={() => navigate("/createRestaurant")}>
          Create Restaurant
        </button>
        <button onClick={() => navigate("/createMenu")}>Create Menu</button>
      </Layout>
    </div>
  );
};
export default Dashboard;
