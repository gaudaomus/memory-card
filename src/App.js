import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import cat from "./components/photos/cat.jpeg";
import cow from "./components/photos/cow.jpeg";
import dog from "./components/photos/dog.jpeg";
import bird from "./components/photos/bird.jpeg";
import sheep from "./components/photos/sheeps.jpeg";
import pig from "./components/photos/pig.jpeg";
import fish from "./components/photos/fish.jpeg";
import whale from "./components/photos/whale.jpeg";
import turtle from "./components/photos/turtle.jpeg";
import rabbit from "./components/photos/rabbit.jpeg";
import snek from "./components/photos/snek.jpeg";
import moonmoon from "./components/photos/moon-moon.jpeg";

const App = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedArray, setClickedArray] = useState([]);
  const [cardObjects, setCardObjects] = useState([
    { picture: cat, description: "cat", key: 1 },
    { picture: cow, description: "cow", key: 2 },
    { picture: dog, description: "dog", key: 3 },
    { picture: bird, description: "bird", key: 4 },
    { picture: sheep, description: "sheep", key: 5 },
    { picture: pig, description: "pig", key: 6 },
    { picture: fish, description: "fish", key: 7 },
    { picture: whale, description: "whale", key: 8 },
    { picture: turtle, description: "turtle", key: 9 },
    { picture: rabbit, description: "rabbit", key: 10 },
    { picture: snek, description: "snek", key: 11 },
    { picture: moonmoon, description: "moon moon", key: 12 },
  ]);

  function wasClicked(key) {
    if (clickedArray.indexOf(key)>= 0) {
      setClickedArray([]);
      return true;
    } else {
      setClickedArray(clickedArray.concat(key));
      return false;
    }
  }

  function scoreManager(key) {
    let tempScore = score;
    if (wasClicked(key)) {
      setScore(0);
    } else {
      tempScore = score + 1;
      setScore(tempScore);
      if (highScore <= tempScore) {
        setHighScore(tempScore);
      }
    }
  }

  function reset() {
    setClickedArray([]);
    setScore(0);
    setHighScore(0);
  }

  useEffect(() => {
    let tempCardObjects = JSON.parse(JSON.stringify(cardObjects));
    let randomCards = [];
    let indexTrack = [];
    let i = 0;
    let index = Math.floor(Math.random() * 12);
    while (i < 12) {
      if (indexTrack.indexOf(index) >= 0) {
        index = Math.floor(Math.random() * 12);
      } else {
        randomCards.push(tempCardObjects[index]);
        i += 1;
        indexTrack.push(index);
      }
    }
    setCardObjects(randomCards);
  },[score]);

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
      </div>
    </div>
  );
};

export default App;