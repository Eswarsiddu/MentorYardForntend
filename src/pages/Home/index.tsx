import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      Home
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
}
