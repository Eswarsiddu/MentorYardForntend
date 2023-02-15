import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { WaitingPage } from "../../components/WaitingPage";
import { useAuth } from "../../context/AuthContext";
import { getMenteeByFuid, getMentorByFuid } from "../../utils/BackendRequests";
import ROLES from "../../types/RolesEnum";
import "./DashBoard.css";
import { MenteeDashboard } from "../../components/MenteeDashboard";
import { MentorDashboard } from "../../components/MentorDashboard";
export default function DashBoard() {
  const { logout, role, currentUser, bioDetails } = useAuth();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(" dashboard role", role, "bio", bioDetails);
    if (bioDetails.address) {
      setLoading(false);
    } else {
      navigate("/createbio");
    }
  }, []);
  if (loading) return <WaitingPage />;
  return role == ROLES.MENTEE ? <MenteeDashboard /> : <MentorDashboard />;
}
