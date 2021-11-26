import "./App.css";
import { useState } from "react";

//const url = "https://api.twitter.com/2/spaces/search?query=startup";

function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  function inputHandler(e) {
    setInput(e.target.value);
  }

  function btnHandler() {
    // axios
    //   .get(url, { headers: { Authorization: `Bearer ${token}` } })
    //   .then((res) => res.json())
    //   .then((json) => console.log(json))
    //   .catch((error) => {
    //     console.log(error);
    //   });
    fetch("/netlify/functions/auth-fetch", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json, text/plain, */*",
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((error) => console.log(error));
  }

  // console.log(`Bearer ${token}`)
  console.log(`Bearer ${process.env.REACT_APP_TOKEN}`);

  return (
    <div className="App">
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :</p>
      <input type="text" onChange={inputHandler} />
      <button onClick={btnHandler}>Find Spaces</button>
    </div>
  );
}

export default App;
