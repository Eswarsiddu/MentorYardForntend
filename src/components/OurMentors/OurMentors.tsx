import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import mentorsData from "../../utilities/MentorsData";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading.js";
import './OurMentors.css'


export default function OurMentors() {
  return (
    <div className="mentors__container">
      <ScreenHeading subHeading={"Meet The Stars"} title={"Our Mentors"} />

      <div className="mentors__display__gallery">
        <ImageList
          sx={{  height: 510, padding: "16px", margin: "16px" }}
          cols={8}
          rowHeight={160}>
          {mentorsData.map((mentor) => (
            <ImageListItem key={mentor.img}>
              <img
                src={`${mentor.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${mentor.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={mentor.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
}
