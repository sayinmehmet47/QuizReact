import './App.css';
import React, { useState, useEffect } from 'react';
import QuestionGrid from './components/QuestionGrid';
import StartScreen from './components/StartScreen';
function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [amount, setAmount] = useState('10');
  const [category, setCategory] = useState('23');
  const [difficulty, setDifficulty] = useState('easy');
  const [start, setStart] = useState('false');

  useEffect(() => {
    fetch(
      `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.results);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [amount, category, difficulty]);
  console.log(error);
  console.log(isLoaded);

  return start === 'true' ? (
    <div className="App">
      <QuestionGrid isLoaded={isLoaded} items={items} />
    </div>
  ) : (
    <div>
      <StartScreen
        amount={(e) => setAmount(e)}
        category={(e) => setCategory(e)}
        difficulty={(e) => setDifficulty(e)}
        start={(e) => setStart(e)}
      />
    </div>
  );
}

export default App;
