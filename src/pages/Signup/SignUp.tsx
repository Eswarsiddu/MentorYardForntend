import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import ROLES from "../../types/RolesEnum";
import { addMentee, addMentor } from "../../utils/BackendRequests";
import { checkPasswordContraints } from "../../utils/Constants";
import { auth } from "../../utils/FireBaseConfig";
import "./SignUp.css";
export default function SignUp() {
  const { register, currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [commonError, setCommonError] = useState("");
  const [signedUp, setSignedUp] = useState(false);
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    email: "",
    name: "",
    role: ROLES.MENTEE,
  });

  return (
    <div className="sign__up__form__container">
      <form
        className="sign__up__form"
        onSubmit={async (e) => {
          setLoading(true);
          e.preventDefault();
          // return;
          const formData = new FormData(e.target as HTMLFormElement);
          const name = formData.get("name") as string;
          const email = formData.get("email") as string;
          const password = formData.get("password") as string;
          const role = formData.get("role") as string;
          if (!checkPasswordContraints(password)) {
            setEmailError(false);
            setCommonError(
              "Password must contain at least 6 characters, including UPPER,lower, special character, number"
            );
            setLoading(false);
            return;
          }
          try {
            await register(email, password, name, role);
            // console.log("uid", auth.currentUser?.uid);

            // setInputData({ name, email, role });
            // setSignedUp(true);
          } catch (e: any) {
            setLoading(false);
            setEmailError(false);
            setCommonError("");
            console.log(e);
            if (e.code == "auth/email-already-in-use") setEmailError(true);
            else
              setCommonError(
                "Internal Server Error, Plese trye after some time"
              );
          }
        }}
      >
        <div>
          <Link to="/login">Login</Link>
          <div style={{ display: "flex" }}>
            <label> Mentee </label>
            <input
              type="radio"
              className="sign__up__role"
              name="role"
              value={ROLES.MENTEE}
              defaultChecked
              required
            />
          </div>
          <div style={{ display: "flex" }}>
            <label> Mentor </label>
            <input
              type="radio"
              className="sign__up__role"
              name="role"
              value={ROLES.MENTOR}
              required
            />
          </div>
        </div>
        <div>
          <label> Name </label>
          <input
            type="text"
            className="sign__up__name"
            placeholder="Your Name"
            name="name"
            required
          />
        </div>
        <div>
          <label> Email </label>
          <input
            type="email"
            className="sign__up__email"
            placeholder="Enter Your Email"
            name="email"
            required
          />
          {emailError && <p> Email Already In Use </p>}
        </div>
        <div>
          <label> Password </label>
          <input
            type="password"
            className="sign__up__password"
            placeholder=" Super Secret Password"
            name="password"
            required
          />
        </div>
        {commonError != "" && <p> {commonError} </p>}
        <button type="submit"> {loading ? "Loading" : "Signup"} </button>
      </form>
    </div>
  );
}
