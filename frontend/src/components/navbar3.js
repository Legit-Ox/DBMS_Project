import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { onLogout } from "../api/auth";
import { useDispatch } from "react-redux";
import { unauthenticateUser } from "../redux/slices/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);
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
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <div>
          <NavLink to="/home2">
            <span className=" mb-0 h1">Home</span>
          </NavLink>
        </div>

        {isAuth ? (
          <div>
            <NavLink to="/dashboard" className="mx-3">
              <span>Dashboard</span>
            </NavLink>
          </div>
        ) : (
          <div>
            <NavLink to="/login">
              <span>Login</span>
            </NavLink>

            <NavLink to="/register" className="mx-3">
              <span>Register</span>
            </NavLink>
          </div>
        )}
        <button onClick={() => logout()} className="btn btn-primary">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
