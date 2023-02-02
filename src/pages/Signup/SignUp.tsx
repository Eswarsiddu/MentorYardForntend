import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import ROLES from "../../types/RolesEnum";
import { CreateUser } from "../../utils/BackEndRequests";
import { checkPasswordContraints } from "../../utils/Contants";

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

  useEffect(() => {
    if (currentUser) {
      CreateUser(
        inputData.email,
        inputData.name,
        inputData.role,
        currentUser!.uid
      ).then((res) => {
        if (res.status != 200) {
          setEmailError(false);
          setCommonError(
            res.status == 400
              ? "No User Found with this email id"
              : "Internal Server Error, Plese trye after some time"
          );
          setLoading(false);
          return;
        }
        console.log("user created");
        navigate("/dashboard");
      });
    }
  }, [signedUp]);

  return (
    <form
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
          setInputData({ name, email, role });
          setSignedUp(true);
        } catch (e: any) {
          setLoading(false);
          setEmailError(false);
          setCommonError("");
          console.log(e);
          if (e.code == "auth/email-already-in-use") setEmailError(true);
          else
            setCommonError("Internal Server Error, Plese trye after some time");
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
        <label>Name</label>
        <input type="text" name="name" value="Eswar" required />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" required />
        {emailError && <p>Email Already In Use</p>}
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" required />
      </div>
      {commonError != "" && <p>{commonError}</p>}
      <button type="submit">{loading ? "Loading" : "Signup"}</button>
    </form>
  );
}
