import "./App.css";
import { useState, useEffect } from "react";

// services
import getPlayers from "../src/services/getPlayers";

function App() {
  const [heigth, setHeight] = useState(0);
  const [names, setNames] = useState();
  const [data, setData] = useState();

  const Players = (array) => {
    let playersNames = [];
    array.filter(function (key) {
      if (key.h_in === heigth) {
        playersNames.push(key.first_name);
        return false;
      } else {
        return true;
      }
    });
    return playersNames;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ENTRE AL HANDLE SUBMIT");
    const array = data.values;
    setNames(Players(array));
  };

  useEffect(() => {
    getPlayers().then((result) => {
      setData(result);
    });
  }, []);

  return (
    <div className="App">
      <h1>Search NBM players</h1>
      <form className="AppForm" onSubmit={handleSubmit}>
        <label className="formElements">Insert the Height (inches):</label>
        <input
          className="formElements"
          type="Number"
          name="height"
          placeholder="Height"
          value={heigth}
          onChange={(e) => setHeight(e.target.value)}
        />
        <button className="formElements" type="submit">
          Search
        </button>
      </form>
      <div className="containerResult">
        <div className="searchResult">
          {names != null &&
            names.length > 0 &&
            names.map((name, key) => <p key={key}>{name}</p>)}
        </div>
        {names != null && names !== undefined && names.length < 1 && (
          <p>No matches found</p>
        )}
      </div>
    </div>
  );
}

export default App;
