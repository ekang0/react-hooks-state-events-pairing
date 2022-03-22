import video from "../data/video.js";
import React, { useState } from "react";
import VideoDetails from "./VideoDetails";
import Upvote from "./Upvote";
import Downvote from "./Downvote";
import Comments from "./Comments";
import CommentVisibility from "./CommentVisibility";


function App() {
  console.log("Here's your data:", video);
  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);
  const [commentVisButt, setCommentVisButt] = useState("Hide Comments");

  function handleUpvote(event) {
    let upvotesChange = parseFloat(event.target.innerText.split(' ')[0]);
    //console.log(upvotesChange);
    upvotesChange += 1;
    //console.log(upvotesChange);
    setUpvotes(upvotesChange);
  };

  function handleDownvote(event) {
    let downvotesChange = parseFloat(event.target.innerText.split(' ')[0]);
    downvotesChange -= 1;
    setDownvotes(downvotesChange);
  };

  function handleCommentVisButt(event) {
    let buttonText = event.target.innerText;
    if(buttonText === "Hide Comments") {
      setCommentVisButt("Show Comments");
    } else {
      setCommentVisButt("Hide Comments");
    }
  };


  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <VideoDetails title={video.title} views={video.views} uploaded={video.createdAt}/>
      <Upvote upvotes={upvotes} changeUpvote={handleUpvote}/>
      <Downvote downvotes={downvotes} changeDownvote={handleDownvote}/>
      <br></br>
      <br></br>
      <CommentVisibility commentVisButt={commentVisButt} changeCommentVis={handleCommentVisButt}/>
      <hr></hr>
      {commentVisButt === "Show Comments" ? null : <Comments numberComments={video.comments.length} commentsArray={video.comments}/>}
    </div>
  );
}

export default App;
