import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import mentorsData from "../../utilities/MentorsData";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading.js";

export default function MentorDashboard() {
  return (
    <div className="mentors__container">
      <ScreenHeading subHeading={"Meet The Stars"} title={"Our Mentors"} />

      <div className="mentors__display__gallery">
        <ImageList
          sx={{ width: 500, height: 450, padding: "12px", margin: "18px" }}
          cols={3}
          rowHeight={164}>
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
