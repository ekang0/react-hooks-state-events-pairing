import React from "react";
import CommentTemplate from "./CommentTemplate";

function Comments( { numberComments, commentsArray } ) {

  return (
    <div>
      <h3>{numberComments} Comments</h3>
      <CommentTemplate commentsArray={commentsArray}/>
    </div>
  );
};

export default Comments;