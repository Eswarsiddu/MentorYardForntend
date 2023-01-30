import { Route, Routes } from "react-router-dom";
import "./App.css";
// import NavBar from "./components/NavBar/NavBar";
import { Home } from "./pages/Home/Home";

export function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} >
      </Route>
    </Routes>
  );
}
