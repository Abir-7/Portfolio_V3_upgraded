import React from "react";

const HeartRate = () => {
  return (
    <div className="heart-rate">
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="200px"
        height="50px"
        viewBox="0 0 150 73"
        enableBackground="new 0 0 150 73"
      >
        <polyline
          className="heart-line"
          fill="none"
          stroke="var(--primary)" // Theme-aware color
          strokeWidth="2"
          strokeOpacity="0.5"
          strokeMiterlimit="10"
          points="0,45.486 38.514,45.486 44.595,33.324 50.676,45.486 57.771,45.486 62.838,55.622 71.959,9 80.067,63.729 84.122,45.486 97.297,45.486 103.379,40.419 110.473,45.486 150,45.486"
        />
      </svg>
    </div>
  );
};

export default HeartRate;
