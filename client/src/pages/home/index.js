import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [username, setUsername] = React.useState(``);
  const [isEmpty, setIsEmpty] = React.useState();
  const navigateToRoute = useNavigate();
  const handleLogin = (ev) => {
    ev.preventDefault();
    //   username === `` ? setIsEmpty(true) : false;
    if (username === ``) return setIsEmpty((prevState) => !prevState);
    localStorage.setItem("username", username);
    setUsername(``);
    navigateToRoute(`/post`);
  };
  const handleOnChange = ({ target: { value } }) => setUsername(value);
  return (
    <main>
      <h2>Sign in to Notification center</h2>
      {!username && <p>Enter your username</p>}
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleOnChange}
        />
        <button type="submit">Sign in</button>
      </form>
    </main>
  );
};

export default Home;
