import React from "react";

//library
import axios from "axios";

import "./App.css";

function App(){
  const getJoke = () => {
    axios.get ("https://official-joke-api.appspot.com/random_joke");
  }
  return <div>Hello Dimos!</div>;


}
export default App;