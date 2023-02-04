import { Link, useNavigate } from "react-router-dom";
// import ROLES from "../../types/RolesEnum";
// import { useAuth } from "../../context/AuthContext";
import "./CreateBio.css";
// import { SubmitBio } from "../../utils/BackEndRequests";
import { useState } from "react";
export default function CreateBio() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
//   const { currentUser, logout, role } = useAuth();
// for developing ui use temporary variables
const ROLES = {MENTOR:"metnor",MENTEE:"mentee"};
const role = ROLES.MENTOR;
  const navigate = useNavigate();
  return (
    <div>
      create bio
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setLoading(true);

          // to show errors like, inavlid credentials, wrong Password
          setTimeout(()=>{
            setError("some error");
            setLoading(false);
          },2000);
        //   const fromData = new FormData(e.target as HTMLFormElement);
        //   const res = await SubmitBio(currentUser!.uid, role!, fromData);
        //   if (res == "") {
        //     navigate("/dashboard");
        //   } else {
        //     setError(res);
        //     setLoading(false);
        //   }
        // }
    }
      >
        <div>
          <label>Phone Number</label>
          <input type="tel" name="phoneNumber" required />
        </div>
        <h2>Address</h2>
        <div>
          <label>line 1</label>
          <input type="text" name="line1" required />
        </div>
        <div>
          <label>line 2</label>
          <input type="text" name="line2" required />
        </div>
        <div>
          <label>city</label>
          <input type="text" name="city" required />
        </div>
        <div>
          <label>state</label>
          <input type="text" name="state" required />
        </div>
        <div>
          <label>country</label>
          <input type="text" name="country" required />
        </div>
        {role == ROLES.MENTEE ? (
          <div>
            <div>
              <label>Standard</label>
              <input type="text" name="standard" required />
            </div>
          </div>
        ) : (
          <div>
            <div>
              <label>occupation</label>
              <input type="text" name="occupation" required />
            </div>
            <div>
              <label>designation</label>
              <input type="text" name="designation" required />
            </div>
          </div>
        )}
        {error && <p>{error}</p>}
        <button type="submit">{loading ? "loading" : "submit"}</button>
      </form>
    </div>
  );
}