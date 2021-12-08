import "./App.css";
import { useState } from "react";
import SpacesList from "./components/SpacesList";

// const url =
//   "https://cors-anywhere-venky.herokuapp.com/https://api.twitter.com/2/spaces/search?query=";

function App() {
  const [json, setJson] = useState({});
  const [input, setInput] = useState("");

  function inputHandler(e) {
    setInput(e.target.value);
  }

  function btnHandler() {
    fetch(`/.netlify/functions/space?query=${input}`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((json) => setJson(json))
      .catch((error) => console.log(error));
  }

  const { data, includes } = json;

  return (
    <div className="App">
      <h1>Twitter Space Finder</h1>
      <input type="text" onChange={inputHandler} />
      <button onClick={btnHandler}>Find Spaces</button>
      <SpacesList spaceData={data} userData={includes} />
    </div>
  );
}

export default App;
