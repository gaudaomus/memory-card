import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Header from "./components/Header";

const App = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedArray, setClickedArray] = useState([]);

  const cardObjects = [
    { picture: "cat", description: "cat", key: 1 },
    { picture: "cow", description: "cow", key: 2 },
    { picture: "dog", description: "dog", key: 3 },
    { picture: "bird", description: "bird", key: 4 },
    { picture: "sheep", description: "sheep", key: 5 },
    { picture: "pig", description: "pig", key: 6 },
    { picture: "fish", description: "fish", key: 7 },
    { picture: "whale", description: "whale", key: 8 },
    { picture: "turtle", description: "turtle", key: 9 },
    { picture: "rabbit", description: "rabbit", key: 10 },
    { picture: "snek", description: "snek", key: 11 },
    { picture: "moon moon", description: "moon moon", key: 12 },
  ];

  function wasClicked(key) {
    if (key in clickedArray) {
      setClickedArray([]);
      return true;
    } else {
      setClickedArray(clickedArray.concat(key));
      return false;
    }
  }

  function scoreManager(key) {
    if (wasClicked(key)) {
      setScore(0);
    } else {
      setScore(score + 1);
    }

    if (highScore <= score) {
      setHighScore(score);
    }
  }

  function reset() {
    setClickedArray([]);
    setScore(0);
  }

  return (
    <div>
      <Header reset={reset} score={score} highScore={highScore} />
      <div className="MainContainer">
        {cardObjects.map((item) => {
          return (
            <div key={item.key} onClick={() => scoreManager(item.key)}>
              <Card cardObject={item} />
            </div>
          );
        })}
        {/* iterate through array of objects with props/states to pass through multiple cards */}
        {/* objects should contain link to img, description, key */}
      </div>
    </div>
  );
};

export default App;
