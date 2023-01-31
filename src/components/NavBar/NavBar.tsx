import { Outlet } from "react-router-dom";
import "./NavBar.css";
export function NavBar() {
  return (
    <>
      <nav>NavBar</nav>
      <Outlet />
    </>
  );
}
