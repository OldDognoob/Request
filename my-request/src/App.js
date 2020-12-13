import React from "react";

//library
import axios from "axios";

import "./App.css";

function App(){
  const getJoke = () => {
    axios.get ("https://official-joke-api.appspot.com/random_joke")
    .then((response)=>{
      console.log(response);
    }
    );
  };
  return <div>Hello Dimos!
    <button onClick={getJoke}>Get the Joke</button>
  </div>;
  


}
export default App;