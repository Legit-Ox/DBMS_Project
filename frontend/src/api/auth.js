import axios from "axios";
axios.defaults.withCredentials = true;

export async function onRegistration(registrationData) {
  return await axios.post(
    "http://localhost:3006/api/v1/register",
    registrationData
  );
}

export async function onLogin(loginData) {
  return await axios
    .post("http://localhost:3006/api/v1/login", loginData)
    .then((response) => {
      console.log(response.data.isOwner.isOwner);
    });
}

export async function onLogout() {
  return await axios.get("http://localhost:3006/api/v1/logout");
}

export async function fetchProtectedInfo() {
  return await axios.get("http://localhost:3006/api/v1/protected");
}
