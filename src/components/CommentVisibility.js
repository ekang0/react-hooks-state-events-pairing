import React from "react";

function CommentVisibility( { commentVisButt, changeCommentVis }) {
  return (
    <button onClick={changeCommentVis}>{commentVisButt}</button>
  );
};

export default CommentVisibility;