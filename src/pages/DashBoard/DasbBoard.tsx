import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { WaitingPage } from "../../components/WaitingPage";
import { useAuth } from "../../context/AuthContext";
import { GetBio, HasBio } from "../../utils/BackEndRequests";
import "./DashBoard.css";
export default function DashBoard() {
  const { logout, role, currentUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    GetBio(currentUser!.uid, role!).then((data) => {
      if (data) {
        if (data.address) {
          setLoading(false);
        } else {
          console.log("no address");
          navigate("/createbio");
        }
      } else {
        console.log("error");
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
  return (
    <div>
      <p>Dash Board</p>
      <p>role{role ? `role is ${role}` : "null"}</p>
      <button
        onClick={async () => {
          await logout();
          navigate("/");
        }}
      >
        logout
      </button>
    </div>
  );
}
