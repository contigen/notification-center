import React from "react";

export const WritePost = ({ socket }) => {
  const postID = React.useId();
  const [title, setTitle] = React.useState(``);
  const [postContent, setPostContent] = React.useState(``);
  const submitPost = (ev) => {
    ev.preventDefault();
    if (title === `` && postContent === ``) return;
    socket.emit(`new post`, {
      id: postID,
      title,
      postContent,
      likes: 0,
      username: localStorage.getItem(`username`),
    });
    setTitle(``);
    alert(title, postContent);
    setPostContent(`  ```);
  };
  const handleOnChange = ({ target: { value } }) => setTitle(value);
  const handleContentChange = ({ target: { value } }) => setPostContent(value);

  return (
    <section>
      <div>
        <h2>
          <label htmlFor="title">Post Title</label>
        </h2>
        <input
          id="title"
          name="title"
          value={title}
          onChange={handleOnChange}
        />
      </div>
      <form onSubmit={submitPost}>
        <textarea
          name="post"
          id=""
          value={postContent}
          onChange={handleContentChange}
          cols="30"
          rows="10"
          placeholder="Write post..."
        ></textarea>
        <br />
        <button type="submit">Submit Post</button>
      </form>
    </section>
  );
};
export default WritePost;
