import React from "react";

function Upvote( { upvotes, changeUpvote }) {
  return (
    <button id="upvote" onClick={changeUpvote}>{upvotes} 👍</button>
  );
};


export default Upvote;