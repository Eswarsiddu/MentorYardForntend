import { Route, Routes } from "react-router-dom";
import "./App.css";
import Testimonial from './components/Testimonial/Testimonial';
import { ContactUs } from './components/ContactUs/ContactUs';
import HomePage from './pages/HomePage/HomePage';
import MentorPage from './pages/MentorPage/MentorPage';


export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} >
      </Route>
      <Route path="/testimonial" element={<Testimonial />} >
      </Route>
      <Route path="/contact" element={<ContactUs />} >
      </Route>
      <Route path="/mentors" element={<MentorPage />} >
      </Route>

    </Routes>
  );
}
