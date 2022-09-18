import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <h1 style={{ fontSize: "10rem" }}>404 - Page doesn't exist</h1>
      <h2>
        Let's go <Link to="/">home</Link>
      </h2>
    </div>
  );
};

export default Page404;
