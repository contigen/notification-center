import React from "react";

const PostComponent = () => {
  const POSTS = [
    { id: 1, title: `new post`, content: `what's up devs` },
    { id: 2, title: `new post`, content: `what's up devs` },
  ];
  return (
    <section>
      <h2 className="center">Recent Posts</h2>
      {POSTS.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </section>
  );
};
export default PostComponent;
