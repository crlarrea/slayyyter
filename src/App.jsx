import { useState } from "react";
import "./App.css";
import { Home } from "./pages/Home";
import { SocialMedia } from "./components/SocialMedia";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <SocialMedia />
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <article>
          <p>
            Official page:{" "}
            <a href="https://www.slayyyter.com/" target="_blank">
              www.slayyyter.com
            </a>
          </p>
        </article>
      </footer>
    </>
  );
}

export default App;
