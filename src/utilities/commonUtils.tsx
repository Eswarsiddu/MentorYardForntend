import {Home} from "../components/Home/Home";
import {AboutUs} from "../components/AboutUs/AboutUs";
import Testimonial from "../components/Testimonial/Testimonial";
import {ContactUs} from "../components/ContactUs/ContactUs";


export const TOTAL_SCREENS = [
  {
    screen_name: "Home",
    component: Home,
  },
  {
    screen_name: "AboutUs",
    component: AboutUs,
  },
 
  {
    screen_name: "Testimonial",
    component: Testimonial,
  },
  {
    screen_name: "ContactUs",
    component: ContactUs,
  },
];

export const GET_SCREEN_INDEX = (screen_name : String) => {
  if (!screen_name) return -1;
  for (let i = 0; i <= TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }
  return -1
};
