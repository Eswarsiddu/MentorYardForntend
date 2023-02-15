import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";

export function AccountInfo() {
  const { currentUser, updateEmailAddress, updateDisplayName } = useAuth();
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const [staticState, setStaticState] = useState(true);
  const resetData = () => {
    emailRef.current!.value = currentUser!.email as string;
    nameRef.current!.value = currentUser!.displayName as string;
  };
  useEffect(resetData, []);
  const updateInfo = () => {
    toast("Info updated");
    if (emailRef.current?.value != currentUser?.email) {
      updateEmailAddress(emailRef.current!.value);
    }
    if (nameRef.current?.value != currentUser?.displayName) {
      updateDisplayName(nameRef.current!.value);
    }
  };
  return (
    <div>
      <div>
        <label>Email</label>
        <input ref={emailRef} type="email" disabled={staticState} />
      </div>
      <div>
        <label>Name</label>
        <input ref={nameRef} type="text" disabled={staticState} />
      </div>
      <div>
        <span
          onClick={(e) => {
            setStaticState((p) => {
              p = !p;
              if (p) {
                resetData();
              }
              return p;
            });
          }}
        >
          {staticState ? "Edit" : "cancel"}
        </span>
        {!staticState && <button onClick={updateInfo}>Update</button>}
      </div>
    </div>
  );
}
