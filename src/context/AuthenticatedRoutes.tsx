import { Navigate } from "react-router-dom";
import { WaitingPage } from "../components/WaitingPage";
import { useAuth } from "./AuthContext";

export function AuthenticatedRoute({ children }: any) {
  const { currentUser } = useAuth();
  if (typeof currentUser == "undefined") return <WaitingPage />;
  if (currentUser) return <Navigate to="/dashboard" />;
  return children;
}
