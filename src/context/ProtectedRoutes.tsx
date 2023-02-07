import { Navigate } from "react-router-dom";
import { WaitingPage } from "../components/WaitingPage";
import { useAuth } from "./AuthContext";

export function ProtectedRoute({ children }: any) {
  const { currentUser } = useAuth();
  if (typeof currentUser == "undefined") return <WaitingPage />;
  if (currentUser == null) return <Navigate to="/login" />;
  return children;
}
