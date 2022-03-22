import React from "react";


function CommentTemplate( { commentsArray } ) {
  const comments = commentsArray.map((comment) => {
    return (
    <div key={comment.id}>
      <h5>{comment.user}</h5>
      <p>{comment.comment}</p>
    </div>
    )
  });

return (
  <div>
    {comments}
  </div>
)
};

export default CommentTemplate;