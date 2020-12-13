import React, { useState } from "react";

//library
import axios from "axios";

import "./App.css";

function App() {
  const [joke, setJoke] = useState("");

  const getJoke = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.setup + "..." + data.punschline);
      });
  };
  return (
    <div className="app">
      <div className="card">
        <hi1 className = "heading">Hello Dimos!</hi1>
        <button className="button" onClick={getJoke}>
          Get the Joke
        </button>
        {joke}
      </div>
    </div>
  );
}
export default App;
