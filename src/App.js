import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [content, setContent] = useState("");
  const [disable, setDisable] = useState(false);

  async function fetchNewJoke() {
    setDisable(true);
    const jokesRes = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json"
      }
    });

    const joke = await jokesRes.json();
    setContent(joke.joke);
    setDisable(false);
  }

  return (
    <div className="container">
      <h3>Dont't laugh challenge</h3>
      <div className="joke">{content}</div>
      <button disabled={disable} className="btn" onClick={fetchNewJoke}>
        Get Another Joke
      </button>
    </div>
  );
}
