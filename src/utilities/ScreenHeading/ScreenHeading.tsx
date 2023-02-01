import React from "react";
import "./ScreenHeading.css";
// import { UilArrowUp } from "@iconscout/react-unicons";

const ScreenHeading = (props: {
  title: string | number | boolean | React.ReactElement<
    // import { UilArrowUp } from "@iconscout/react-unicons";
    any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; subHeading: string | number | boolean | React.ReactElement<
      // import { UilArrowUp } from "@iconscout/react-unicons";
      any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
}) => {
  return (
    <div className="heading-container">
      <div className="screen-heading">
        <span>{props.title}</span>
      </div>
      {props.subHeading ? (
        <div className="screen-sub-heading">
          <span>{props.subHeading}</span>
        </div>
      ) : (
        <div></div>
      )}
      <div className="screen-separator">
        <div className="separator-line">
          <div className="separator-blob">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenHeading;
