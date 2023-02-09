import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { WaitingPage } from "../../components/WaitingPage";
import { useAuth } from "../../context/AuthContext";
import { GetBio, HasBio } from "../../utils/BackEndRequests";
import ROLES from "../../types/RolesEnum";
import "./DashBoard.css";
import { MenteeDashboard } from "../../components/MenteeDashboard";
import { MentorDashboard } from "../../components/MentorDashboard";
export default function DashBoard() {
  const { logout, role, currentUser, setProfileImage } = useAuth();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    GetBio(currentUser!.uid, role!).then((data) => {
      if (data) {
        console.log("data", data);
        if (data.address) {
          setProfileImage(data.profilePic);
          setLoading(false);
        } else {
          console.log("no address");
          navigate("/createbio");
        }
      } else {
        console.log("error");
        navigate("/createbio");
      }
    });
    // HasBio(currentUser!.uid, role!).then((hasBio) => {
    //   if (hasBio) {
    //     setLoading(false);
    //   } else {
    //     navigate("/createbio");
    //   }
    // });
  }, []);
  if (loading) return <WaitingPage />;
  return role == ROLES.MENTEE ? <MenteeDashboard /> : <MentorDashboard />;
}
