import React from "react";
import "./index.css";

const Comment = ({ showComment }) => {
  const [comment, setComment] = React.useState(``);
  return (
    <div className="comment" hidden={showComment}>
      <h4>@username</h4>
      <textarea
        name="comment"
        required
        value={comment}
        onChange={({ target: { value } }) => setComment(value)}
        cols="30"
        rows="5"
        placeholder="Write comment..."
      ></textarea>
      <br />
      <button>like comment</button>
    </div>
  );
};

export default Comment;
