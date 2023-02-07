import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import mentorsData from "../../utilities/MentorsData";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading.js";
import "./OurMentors.css";

export default function OurMentors() {
  return (
    <div className="mentors__container" id="mentors">
      <ScreenHeading subHeading={"Meet The Stars"} title={"Our Mentors"} />

      <div className="mentors__display__gallery">
        <ImageList sx={{ padding: "20px", margin: "20px" }} cols={5}>
          {mentorsData.map((mentor) => (
            <ImageListItem key={mentor.img} className="mentor__images">
              <img
                src={`${mentor.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${mentor.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={mentor.title}
                loading="lazy"
                className="mentor__image__box"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
}
