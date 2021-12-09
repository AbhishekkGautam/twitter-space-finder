import "./App.css";
import { useState } from "react";
import axios from "axios";
import SpacesList from "./components/SpacesList";

const apiURL = "/.netlify/functions/space";

const authAxios = axios.create({
  baseURL: apiURL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
  },
});

function App() {
  const [json, setJson] = useState({});
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState("");
  const [isSuccess, setIsSuccess] = useState(true);

  function inputHandler(e) {
    setInput(e.target.value);
  }

  const fetchData = async () => {
    try {
      const result = await authAxios.get(`?query=${input}`);
      setLoading(false);
      setJson(result.data);
      if (!result.data.data) {
        setIsSuccess(false);
      } else {
        setIsSuccess(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  function btnHandler() {
    // fetch(`/.netlify/functions/space?query=${input}`, {
    //   headers: {
    //     Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((json) => setJson(json))
    //   .catch((error) => console.log(error));
    setLoading(true);
    fetchData();
  }

  const { data, includes } = json;

  return (
    <div className="bg-darkGray min-h-screen text-white">
      <div className="container mx-auto md:max-w-4xl">
        <div className="text-center pt-20 pb-24 md:p-32">
          <h1 className="text-2xl">Twitter Space Finder</h1>
          <input
            className="text-white bg-primaryGray w-64 md:w-96 mt-12 px-4 py-3 outline-none leading-normal text-sm rounded-3xl"
            type="text"
            placeholder="Type any topic"
            onChange={inputHandler}
          />
          <button
            className="bg-gradient-to-r from-gradientPurple via-gradientIndigo to-gradientBlue px-4 py-3 w-24 -ml-10 rounded-3xl text-sm"
            onClick={btnHandler}
          >
            Search
          </button>
        </div>
        <div className="">
          {loading ? (
            <h1 className="text-center">Hang On... Spaces are on the way!</h1>
          ) : isSuccess ? (
            <SpacesList spaceData={data} userData={includes} />
          ) : (
            <h1 className="text-center">No Results Found.</h1>
          )}
        </div>
        <h1 className="text-center text-gray-300 pt-6">
          Made with a lot of procrastination by{" "}
          <a
            href="https://twitter.com/helloAbhishekk"
            className="text-blue-400 underline"
          >
            abhishek.
          </a>
        </h1>
      </div>
    </div>
  );
}

export default App;
