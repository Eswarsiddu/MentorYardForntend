import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { AuthenticatedRoute } from "./context/AuthenticatedRoutes";
import { ProtectedRoute } from "./context/ProtectedRoutes";
import { CreateBio } from "./pages/CreateBio";
import { DashBoard } from "./pages/DashBoard";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/Signup";

export function App() {
  return (
    <Routes>
      <Route element={<NavBar />}>
        <Route
          path="/"
          element={
            <AuthenticatedRoute>
              <Home />
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
      </Route>
    </Routes>
  );
}
