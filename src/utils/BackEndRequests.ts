import { BACKEND_HTTP_URL } from "./Contants";
export const CreateUser = (
  email: string,
  name: string,
  role: string,
  uid: string
) => {
  console.log("create request", { email, name, uid, role });
  return fetch(BACKEND_HTTP_URL + "/createuser", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email,
      name,
      uid,
      role,
    }),
  });
};

export const GetRole = async (uid: string) => {
  const res = await fetch(BACKEND_HTTP_URL + "/getrole" + "/" + uid);
  console.log("get role res", res.status);
  if (res.status == 200) {
    const data = await res.json();
    console.log("data", data);
    return data.role;
  }
};

export const CheckRole = async (uid: string, role: string) => {
  const res = await fetch(BACKEND_HTTP_URL + "/checkrole", {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      uid,
      role,
    }),
  });
  if (res.status == 200) return true;
  return false;
};
