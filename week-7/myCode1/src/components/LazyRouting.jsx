import React, { Suspense, lazy } from "react";
// ! Suuspense api, asynchronous component fetchin , asynchronus daa fetching
import { Route, Routes, useNavigate } from "react-router-dom";
// import Dashboard from "./Dashboard";
// import Landing from "./Landing";
const Dashboard = lazy(() => import("./Dashboard"));
const Landing = lazy(() => import("./Landing"));

const LazyRouting = () => {
  return (
    <div>
      <AppBar />
      <Routes>
        <Route
          path="/dashboard"
          element={
            <Suspense fallback={"Loading..."}>
              <Dashboard />
            </Suspense>
          }
        ></Route>
        <Route
          path="/landing"
          element={
            <Suspense fallback={"Loading..."}>
              <Landing />
            </Suspense>
          }
        ></Route>
      </Routes>
    </div>
  );
};

function AppBar() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dashboard Page
      </button>

      <button
        onClick={() => {
          navigate("/landing");
        }}
      >
        Landing Page
      </button>
    </div>
  );
}

export default LazyRouting;
