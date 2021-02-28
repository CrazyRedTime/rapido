import { useState } from "react";
import "./App.css";
import GameField from "./components/GameField/GameField";
import getNumberOfMathes from "./functions/getNumberOfMacthes";
import makeRandomArray from "./functions/makeRandomArray";

const App = () => {
  const [firstRandomNumbers, setFirstRandomNumbers] = useState(
    makeRandomArray(8, 20)
  );
  const [secondRandomNumbers, setSecondRandomNumbers] = useState(
    makeRandomArray(1, 4)
  );
  const [firstFieldValues, setFirstFieldValues] = useState([]);
  const [secondFieldValues, setSecondFieldValues] = useState([]);
  const [gameIsFinished, setGameIsFinished] = useState(false);
  const [isVictory, setIsVictory] = useState(false);

  const beginNewGame = () => {
    setFirstFieldValues([]);
    setFirstRandomNumbers(makeRandomArray(8, 20));
    setSecondFieldValues([]);
    setSecondRandomNumbers(makeRandomArray(1, 4));
    setGameIsFinished(false);
    setIsVictory(false);
  };

  const finishGame = () => {
    const firstFieldResult = getNumberOfMathes(firstRandomNumbers, firstFieldValues);
    const secondFieldResult = getNumberOfMathes(secondRandomNumbers, secondFieldValues);
    console.log(`совпадений в первом поле: ${firstFieldResult}, совпадений в первом поле: ${secondFieldResult}`)
    setGameIsFinished(true);
    if (firstFieldResult >= 4 || (firstFieldResult >=3 && secondFieldResult === 1)) {
      setIsVictory(true);
    }
  };

  return (
    <div className="App">
      <GameField
        firstRandomNumbers={firstRandomNumbers}
        firstFieldValues={firstFieldValues}
        setFirstFieldValues={setFirstFieldValues}
        secondRandomNumbers={secondRandomNumbers}
        secondFieldValues={secondFieldValues}
        setSecondFieldValues={setSecondFieldValues}
        beginNewGame={beginNewGame}
        finishGame={finishGame}
        gameIsFinished={gameIsFinished}
        isVictory={isVictory}
      />
    </div>
  );
};

export default App;
