import "./App.css";
import Home from "./pages/home/index";

function App() {
  return (
    <>
      <header>
        <hgroup>
          <h1>Notification center</h1>
          <p>Building a notification center like dev.to's</p>
        </hgroup>
      </header>
      <section>
        <Home />
      </section>
    </>
  );
}

export default App;
