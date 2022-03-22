import React from "react";

function Downvote( { downvotes, changeDownvote }) {
  return (
    <button id="downvote" onClick={changeDownvote}>{downvotes} 👎</button>
  );
};

export default Downvote;