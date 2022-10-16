import React from "react";
import "./App.css";
import Home from "./pages/home/index";
import { socket } from "./lib/socket";

function App() {
  React.useEffect(() => {
    socket.on(
      `onLoad`,
      (posts) => {
        localStorage.setItem(`initialPosts`, JSON.stringify(posts));
      },
      []
    );
    return () => {
      socket.off(`onLoad`);
    };
  }, []);

  return (
    <>
      <header>
        <hgroup>
          <h1>Posts center</h1>
          <p>Building a posts center</p>
        </hgroup>
      </header>
      <section>
        <Home />
      </section>
    </>
  );
}

export default App;
