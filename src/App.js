import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍍": "Pineapple",
  "🍒": "Cherries",
  "🥝": "Kiwi"
};

export default function App() {
  const [bottomText, setBottomText] = useState("");

  function clickHandler(item) {
    var meaning = emojiDictionary[item];
    setBottomText(meaning);
  }

  var emojisAvailable = Object.keys(emojiDictionary).map(function (item) {
    return (
      <span
        key={item}
        style={{ cursor: "pointer", padding: "0.3rem" }}
        onClick={() => clickHandler(item)}
      >
        {item}
      </span>
    );
  });

  function inputChangeHandler(event) {
    var inputEmoji = event.target.value;

    if (inputEmoji === "") {
      setBottomText(" ");
    }

    if (inputEmoji in emojiDictionary) {
      var meaning = emojiDictionary[inputEmoji];
      setBottomText(meaning);
    } else {
      setBottomText("This emoji isn't availabe yet!");
    }
  }

  return (
    <div className="App">
      <h1>Fruit interpreter</h1>
      <input
        style={{
          border: "2px solid #7c3aed",
          borderRadius: "0.4rem",
          padding: "0.5rem"
        }}
        onChange={inputChangeHandler}
      ></input>
      <div style={{ margin: "0.5rem" }}>{bottomText}</div>
      <div
        style={{
          fontWeight: "bold",
          marginTop: "1rem",
          marginBottom: "0.5rem"
        }}
      >
        Following are the emojis we know:
      </div>
      <div>{emojisAvailable}</div>
    </div>
  );
}
