import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import ROLES from "../../types/RolesEnum";
import { CheckRole } from "../../utils/BackEndRequests";
export function Login() {
  const { login, currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState("");
  useEffect(() => {
    console.log("logged in", loggedIn);
    if (!loggedIn) return;
    console.log("current user", currentUser?.displayName, currentUser?.uid);
    if (currentUser) {
      // const validRole = await CheckRole(currentUser.uid, role);
      CheckRole(currentUser.uid, role).then((validRole) => {
        console.log({ validRole });
        if (validRole) {
          navigate("/dashboard");
        } else {
          logout().then(() => {
            setLoggedIn(false);
          });
        }
      });
      // console.log({ validRole });
    }
  }, [loggedIn]);
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const _role = formData.get("role") as string;
        setRole(_role);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        try {
          console.log("loggin in");
          await login(email, password);
          console.log("login setted to true");
          setLoggedIn(true);
          // console.log(
          //   "current user",
          //   currentUser?.displayName,
          //   currentUser?.uid
          // );
          // if (currentUser) {
          //   const validRole = await CheckRole(currentUser.uid, role);
          //   console.log({ validRole });
          //   if (validRole) {
          //     navigate("/dashboard");
          //   } else {
          //     await logout();
          //     console.log("roles doen't match");
          //   }
          // }
        } catch (e) {
          console.log("error", e);
        }
      }}
    >
      <div>
        <div>
          <input
            type="radio"
            name="role"
            value={ROLES.MENTEE}
            defaultChecked
            required
          />
          <label>Mentee</label>
        </div>
        <div>
          <input type="radio" name="role" value={ROLES.MENTOR} required />
          <label>Mentor</label>
        </div>
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" required />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
