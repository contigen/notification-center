import Nav from "../../components/nav";
import Page404 from "./../page404/";
import PostComponent from "./../../components/posts/";
import WritePost from "./../../components/WritePost/";
import { socket } from "../../lib/socket";

const PostPage = () => {
  const USERNAME = localStorage.getItem(`username`) || ``;
  return (
    <section>
      {USERNAME ? (
        <>
          <Nav />
          <h2>Hi {USERNAME}</h2>
          <h1 className="center">Post Page</h1>
          <WritePost socket={socket} />
          <br />
          <br />
          <br />
          <PostComponent />
        </>
      ) : (
        <>
          <h1 className=" center">Sign in to view posts</h1>
          <Page404 />
        </>
      )}
    </section>
  );
};

export default PostPage;
