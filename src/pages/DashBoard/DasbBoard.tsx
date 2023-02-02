import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./DashBoard.css";
export default function DashBoard() {
  const { logout, role } = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <p>Dash Board</p>
      <p>role{role ? `role is ${role}` : "null"}</p>
      <button
        onClick={async () => {
          await logout();
          navigate("/login"); // TODO: replace with home
        }}
      >
        logout
      </button>
    </div>
  );
}
