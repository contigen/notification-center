import React from "react";
import Comment from "./../comment/";

const PostComponent = ({ socket, initialPosts }) => {
  const [showComment, setShowComment] = React.useState(false);
  const [posts, setPosts] = React.useState(() => {
    const initials = JSON.parse(localStorage.getItem(`initialPosts`)) || [];
    return initials;
  });
  React.useEffect(() => {
    socket.on(`postsEvt`, (post) => setPosts(post));
  }, [socket]);
  const sendLike = (id) => socket.emit(`likedPostEvt`, id);
  return (
    <section>
      <h2 className="center">{!posts.length && `No`} Recent Posts</h2>
      {!!posts.length &&
        posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.postContent}</p>
            <button onClick={() => sendLike(post.id)}>like post</button>
            <p>{post.likes}</p>
            <button onClick={() => setShowComment(!showComment)}>
              comment
            </button>
            <Comment showComment={showComment} />
          </div>
        ))}
    </section>
  );
};
export default PostComponent;
