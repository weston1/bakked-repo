import React from "react";
import PropTypes from "prop-types";

import Image from "./Image";
import Content from "./Content";
import "./Banner.css";

const Banner = ({
  title,
  subtitle,
  backgroundImage,
  large,
  className = "",
}) => {
  if (large) className += " Banner-large";
  return (
    <div className="Banner-Section">
      <div className={`Banner relative ${className}`}>
        {backgroundImage && (
          <Image
            background
            resolutions="large"
            src={backgroundImage}
            alt={title}
            size="cover"
          />
        )}
        <div className="container relative">
          <h1 className="Banner--Title">{title}</h1>
          {subtitle && <Content className="Banner--Subtitle" src={subtitle} />}
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Banner;
