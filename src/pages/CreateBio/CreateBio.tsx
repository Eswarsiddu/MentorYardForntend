import { useNavigate } from "react-router-dom";
import ROLES from "../../types/RolesEnum";
import { useAuth } from "../../context/AuthContext";
import "./CreateBio.css";
import { createMenteeBio, createMentorBio } from "../../utils/BackendRequests";
// import { SubmitBio } from "../../utils/BackEndRequests";
import { useState } from "react";
export default function CreateBio() {
  // console.log("history state", history.state);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { currentUser, role } = useAuth();
  const [profileImage, setProfileImage] = useState<any>();
  const navigate = useNavigate();
  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setLoading(true);
          const fromData = new FormData(e.target as HTMLFormElement);
          const data: { [key: string]: any } = {
            name: currentUser!.displayName,
            email: currentUser!.email,
            contact: fromData.get("contact"),
          };
          const addrKeys = ["line1", "line2", "city", "state", "country"];
          const address: { [key: string]: any } = {};
          for (let key of addrKeys) {
            address[key] = fromData.get(key) as string;
          }
          data.address = address;
          if (role == ROLES.MENTEE) {
            data.standard = fromData.get("standard");
          } else {
            data.company = fromData.get("company");
            data.occupation = fromData.get("occupation");
            data.designation = fromData.get("designation");
            data.domain = fromData.get("domain");
          }
          console.log("bio data", data);
          // return; //TODO: remove after test
          const pictureForm = new FormData();
          pictureForm.append("file", profileImage as Blob);
          pictureForm.append("upload_preset", "mentoryard");
          pictureForm.append("cloud_name", "dp7zrbtac");

          const picRes = await fetch(
            "https://api.cloudinary.com/v1_1/dp7zrbtac/upload",
            {
              method: "POST",
              body: pictureForm,
            }
          );
          const picResData = await picRes.json();
          data.photo = picResData.secure_url;

          if (role == ROLES.MENTEE) {
            const res = await createMenteeBio(currentUser!.uid, data);
            if (res != "error") {
              navigate("/dashboard");
            } else {
              setError(res);
              setLoading(false);
            }

            //TODO: update res in authcontext
          } else {
            const res = await createMentorBio(currentUser!.uid, data);
            if (res != "error") {
              navigate("/dashboard");
            } else {
              setError(res);
              setLoading(false);
            }
          }
          // console.log("pic res:", picResData);

          // fromData.append("profilePic", picResData.secure_url);

          // const res = await SubmitBio(currentUser!.uid, role!, fromData);
          // if (res == "") {
          //   navigate("/dashboard");
          // } else {
          //   setError(res);
          //   setLoading(false);
          // }
        }}
      >
        <input
          type="file"
          onChange={(e) => {
            if (e.target.files) {
              setProfileImage(e.target.files[0]);
            }
          }}
        />
        <div>
          <label>Phone Number</label>
          <input type="tel" name="contact" required />
        </div>
        <p>Address</p>
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
              <label>company</label>
              <input type="text" name="company" required />
            </div>
            <div>
              <label>domain</label>
              <input type="text" name="domain" required />
            </div>
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
    </>
  );
}
