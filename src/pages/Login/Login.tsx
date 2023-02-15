import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Login.css";
import ROLES from "../../types/RolesEnum";
export function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { login, logout, role } = useAuth();
  const navigate = useNavigate();
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.target as HTMLFormElement);
        // const _role = formData.get("role") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        // setError("test error");
        // setLoading(false);
        // return;
        try {
          console.log("loggin in");
          const loginStatus = await login(email, password); // Firebase Authentication
          // setError("roles doen't match");
          return;
          if (loginStatus) {
            navigate("/dashboard");
          } else {
            console.log("roles doen't match");
            setError("roles doen't match");
            setLoading(false);
          }
        } catch ({ code }) {
          setLoading(false);
          setError(code as string);
        }
      }}
    >
      <div>
        <Link to="/signup">create account</Link>
        <label>Email</label>
        <input type="email" name="email" required autoFocus />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" required />
      </div>
      {(error != "" || typeof role == "undefined") && (
        <p>{error ? error : "Roles didn't match"}</p>
      )}
      <button type="submit">{loading ? "Loading" : "Login"}</button>
    </form>
  );
}
