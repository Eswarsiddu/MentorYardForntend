import { useAuth } from "../../context/AuthContext";
import "./ChatBlock.css";

import ROLES from "../../types/RolesEnum";
import {
  getMenteeMentors,
  getMentorMentees,
} from "../../utils/BackendRequests";
import { useEffect, useState } from "react";
export function ChatBlock() {
  const { role, currentUser } = useAuth();
  const [userssData, setUserssData] = useState<any[]>([]);
  useEffect(() => {
    if (role == ROLES.MENTEE) {
      getMenteeMentors(currentUser!.uid).then((data) => {
        console.log("mentors", data);
        setUserssData(data);
      });
    } else {
      getMentorMentees(currentUser!.uid).then((data) => {
        console.log("mentees", data);
        setUserssData(data);
      });
    }
  }, []);
  return (
    <div>
      {userssData.map((value) => {
        return (
          <div>
            <img
              src={value.photo}
              style={{ width: "100px", height: "100px" }}
              alt=""
            />
            <p>{value.name}</p>
            <p>{value.occupation}</p>
          </div>
        );
      })}
    </div>
  );
}
