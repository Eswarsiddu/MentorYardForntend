export const BACKEND_URL = "127.0.0.1:8000";
export const BACKEND_HTTP_URL = "http://127.0.0.1:8000";
const passwordRegEx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
export function checkPasswordContraints(password: string) {
  const matches = password.match(passwordRegEx);
  if (matches) return matches.length >= 0;
  return false;
}
