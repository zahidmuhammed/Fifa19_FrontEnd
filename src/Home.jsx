import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import Context from "./Context/Context";
import "./Home.css";
import data from "./data.json";

const Home = () => {
  const [type, setType] = useState("name");
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const { setPname } = useContext(Context);
  let history = useHistory();

  const handleTypeChange = (e) => {
    setType(e.target.value);
    setValue("");
    setSuggestions([]);
  };

  //Suggestions Recomendation
  const handleInputChange = (e) => {
    const text = e.target.value;
    let matches = [];
    if (text.length > 0) {
      matches = data.filter((user) => {
        const regex = new RegExp(`${text}`, "gi");

        if (type === "name") return user.Name.match(regex);
        else if (type === "nationality") return user.Nationality.match(regex);
        else if (type === "club") return user.Club.match(regex);
        else if (type === "position") return user.Position.match(regex);
      });
    }

    setSuggestions(matches);
    setValue(text);
  };

  const onSuggestHandler = (text) => {
    setValue(text);
    setSuggestions([]);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setPname(e.currentTarget.elements.player.value);
    if (e.currentTarget.elements.player.value) history.push("/Profile");
  };

  return (
    <div className="Home">
      <div className="heading">
        <span id="fifa">FIFA </span> <span id="ninteen">19</span>
      </div>
      <div className="searchsection">
        <div className="form">
          <form onSubmit={onSubmitHandler}>
            <select
              className="selection"
              value={type}
              onChange={handleTypeChange}
            >
              <option value="name">Name</option>
              <option value="nationality">Nationality</option>
              <option value="club">Club</option>
              <option value="position">Position</option>
            </select>
            <input
              type="text"
              id="player"
              placeholder="Type here"
              className="search"
              value={value}
              onChange={handleInputChange}
              autoComplete="off"
              onBlur={() => {
                setTimeout(() => {
                  setSuggestions([]);
                }, 200);
              }}
            />
            <button type="submit" className="btn">
              <svg
                className="searchicon"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
              >
                <path d="M23.111 20.058l-4.977-4.977c.965-1.52 1.523-3.322 1.523-5.251 0-5.42-4.409-9.83-9.829-9.83-5.42 0-9.828 4.41-9.828 9.83s4.408 9.83 9.829 9.83c1.834 0 3.552-.505 5.022-1.383l5.021 5.021c2.144 2.141 5.384-1.096 3.239-3.24zm-20.064-10.228c0-3.739 3.043-6.782 6.782-6.782s6.782 3.042 6.782 6.782-3.043 6.782-6.782 6.782-6.782-3.043-6.782-6.782zm2.01-1.764c1.984-4.599 8.664-4.066 9.922.749-2.534-2.974-6.993-3.294-9.922-.749z" />
              </svg>{" "}
              Search player
            </button>
          </form>

          {suggestions &&
            suggestions.map((suggestions, i) => (
              <div
                className="suggestions"
                key={i}
                onClick={() => onSuggestHandler(suggestions.Name)}
              >
                {suggestions.Name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
