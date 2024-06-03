import "./App.css";
import Navigation from "./Components/Navigation";
import Dashboard from "./Screens/Dashborad";
import Expense from "./Screens/Expense";
import Income from "./Screens/Income";
import Auth from "./Screens/Auth";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Register from "./Screens/Register";

function App() {
  const PrivateRoutes = () => {
    let auth = { token: false };
    console.log(localStorage.getItem("authToken"));
    if (
      localStorage.getItem("authToken") != "" &&
      localStorage.getItem("authToken") != null &&
      localStorage.getItem("authToken") != undefined
    ) {
      auth.token = true;
    }

    return auth.token ? <Outlet /> : <Navigate to="/login" />;
  };

  const AuthenticatedRoutes = () => {
    let auth = { token: false };
    console.log(localStorage.getItem("authToken"));
    if (
      localStorage.getItem("authToken") != "" &&
      localStorage.getItem("authToken") != null &&
      localStorage.getItem("authToken") != undefined
    ) {
      auth.token = true;
    }

    return auth.token ? <Navigate to="/" /> : <Outlet />;
  };

  return (
    <>
      <Router>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossorigin="anonymous"
        ></link>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
          integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossorigin="anonymous"
        ></script>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route exact path="/" element={<Dashboard />}></Route>
            <Route exact path="/expense" element={<Expense />}></Route>
            <Route exact path="/income" element={<Income />}></Route>
          </Route>

          <Route element={<AuthenticatedRoutes/>}>
            <Route path="/login" element={<Auth />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
