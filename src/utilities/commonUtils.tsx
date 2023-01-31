import {Home} from "../pages/Home/Home";
import {AboutUs} from "../pages/AboutUs/AboutUs";
import Testimonial from "../pages/Testimonial/Testimonial";
import {ContactUs} from "../pages/ContactUs/ContactUs";


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
