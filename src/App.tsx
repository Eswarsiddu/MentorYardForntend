import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { AboutUs } from './pages/AboutUs/AboutUs';
import Testimonial from './pages/Testimonial/Testimonial';
import {ContactUs} from './pages/ContactUs/ContactUs';
import HomePage from './pages/HomePage/HomePage';


export function App() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} >
      </Route>
      <Route path="/testimonial" element={<Testimonial />} >
      </Route>
      <Route path="/contact" element={<ContactUs />} >
      </Route>
      <Route path="/about" element={<AboutUs />} >
      </Route>
    </Routes>
  );
}
