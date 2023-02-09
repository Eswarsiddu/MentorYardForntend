import { Route, Routes } from "react-router-dom";
import Testimonial from "./components/Testimonial/Testimonial";
import { ContactUs } from "./components/ContactUs/ContactUs";
import { AuthenticatedRoute } from "./context/AuthenticatedRoutes";
import { ProtectedRoute } from "./context/ProtectedRoutes";
import { CreateBio } from "./pages/CreateBio";
import { DashBoard } from "./pages/DashBoard";
import HomePage from "./pages/HomePage/HomePage";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/Signup";
import NavBar from "./components/NavBar/NavBar";
import MentorPage from "./pages/MentorPage/MentorPage";
import Header from "./components/Header/Header";
import "./App.css";

export function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthenticatedRoute>
            <HomePage />
          </AuthenticatedRoute>
        }
      />
      <Route
        path="/login"
        element={
          <AuthenticatedRoute>
            <Login />
          </AuthenticatedRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <AuthenticatedRoute>
            <SignUp />
          </AuthenticatedRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashBoard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/createbio"
        element={
          <ProtectedRoute>
            <CreateBio />
          </ProtectedRoute>
        }
      />
      {/* </Route> */}
    </Routes>
  );
}
