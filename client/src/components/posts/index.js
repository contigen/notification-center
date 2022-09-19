import React from "react";
const PostComponent = ({ socket }) => {
  const [posts, setPosts] = React.useState(() => {
    // fetch existing posts if it's available
    return socket.on(`onLoad`, (post) => setPosts(post)) || [];
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
          </div>
        ))}
    </section>
  );
};
export default PostComponent;
