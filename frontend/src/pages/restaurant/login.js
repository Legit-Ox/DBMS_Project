import { useState } from "react";
import { onLogin } from "../../api/auth";
import Layout from "../../components/layout";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../../redux/slices/authSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    user_email: "",
    user_password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const [isOwner, setIsOwner] = useState(null);

  const dispatch = useDispatch();
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      // await onLogin(values);
      await axios
        .post("http://localhost:3006/api/v1/login", values)
        .then((response) => {
          response.data.isOwner.isOwner
            ? navigate("/ownerHome")
            : navigate("/homepage");
        });
      dispatch(authenticateUser());

      localStorage.setItem("isAuth", "true");
    } catch (error) {
      console.log(error.response.data.errors[0].msg);
      setError(error.response.data.errors[0].msg);
    }
  };
  return (
    <Layout>
      <form onSubmit={(e) => onSubmit(e)} className="container mt-3">
        <h1>Login</h1>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            onChange={(e) => onChange(e)}
            type="email"
            className="form-control"
            id="email"
            name="user_email"
            value={values.user_email}
            placeholder="test@gmail.com"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            onChange={(e) => onChange(e)}
            type="password"
            value={values.user_password}
            className="form-control"
            id="password"
            name="user_password"
            placeholder="passwod"
            required
          />
        </div>

        <div style={{ color: "red", margin: "10px 0" }}>{error}</div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default Login;
