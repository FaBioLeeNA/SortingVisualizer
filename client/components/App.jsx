/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import style from '../styles/style.jsx';
import { bubbleSort, quickSort, mergeSort } from '../sortAlgo/sortFile.js';

const { ArrayContainer, Bar, ButtonContainer } = style;

// eslint-disable-next-line no-unused-vars
const test = (array, algo) => {
  const sorted = array.sort((a, b) => (a - b));
  const algoSorted = algo.pop();
  for (let i = 0; i < array.lenght; i += 1) {
    if (sorted[i] !== algoSorted[i]) {
      return console.log(false);
    }
  }
  return console.log(true);
};

// this will check if a sorting button was pressed. it is outside becuase if it is inside the
// coponent, it will be set to false everytime it re-renders
let clicked = false;

const stopTimeout = () => {
  const highestTimeoutId = setTimeout(() => {});
  for (let i = 0; i < highestTimeoutId; i += 1) {
    clearTimeout(i);
  }
  clicked = false;
};

const generateArray = (n) => {
  const answer = [];
  for (let i = 0; i < n; i += 1) {
    answer.push(Math.floor(Math.random() * 700));
  }
  return answer;
};

const App = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    setArray(generateArray(300));
  }, []);

  const sort = (e) => {
    if (clicked) { return; }
    clicked = true;
    let stages = [];
    let speed = 0;
    const algorithm = e.target.className;
    if (algorithm === 'bubbleSort') {
      stages = bubbleSort(array);
      speed = 0.1;
    } else if (algorithm === 'quickSort') {
      stages = quickSort(0, array.length - 1, array);
      speed = 100;
    } else if (algorithm === 'mergeSort') {
      stages = mergeSort(array);
      speed = 10;
    }
    const { length } = stages;
    for (let i = 0; i < length; i += 1) {
      const currentStage = stages.shift();
      setTimeout(() => {
        setArray(currentStage);
      }, speed * i);
    }
  };

  const newArray = () => {
    stopTimeout();
    setArray(generateArray(300));
  };

  return (
    <>
      <ArrayContainer>
        {array.map((num, i) => (
          <Bar style={{ height: `${num}px` }} key={i} />
        ))}
      </ArrayContainer>
      <ButtonContainer>
        <button type="button" onClick={newArray}>GenerateNewArray</button>
        <button type="button" className="bubbleSort" onClick={sort}>Bubble Sort</button>
        <button type="button" className="quickSort" onClick={sort}>Quick Sort</button>
        <button type="button" className="mergeSort" onClick={sort}>Merge Sort</button>
        <button type="button" className="stop" onClick={stopTimeout}>Stop</button>
      </ButtonContainer>
    </>
  );
};

export default App;
