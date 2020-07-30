import React from "react";
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="video img-fluid text-center">
    <iframe
      autoplay
      playsinline
      muted
      loop
      preload
      src={videoSrcURL}
      title={videoTitle}
      frameBorder="0"
      width="400px"
      height="300px"
      max-width="100%"
    />
  </div>
);
export default Video;
