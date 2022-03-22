import React from "react";

function VideoDetails( { title, views, uploaded }){
  return (
    <div>
      <h1>{title}</h1>
      <p>{views} Views | Uploaded {uploaded}</p>
    </div>
  );
};


export default VideoDetails;