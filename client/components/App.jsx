/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import style from '../styles/style.jsx';
import { bubbleSort, quickSort, mergeSort } from '../sortAlgo/sortFile.js';

const {
  ArrayContainer,
  Bar,
  ButtonContainer,
  NewArrayForm,
  FormInputButton,
  SortButton,
  FormInputText,
} = style;

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
    answer.push(Math.floor(Math.random() * 650) + 50);
  }
  return answer;
};

const App = () => {
  const [array, setArray] = useState([]);
  const [size, setSize] = useState(300);

  useEffect(() => {
    setArray(generateArray(size));
  }, []);

  const sort = (e) => {
    if (clicked) { return; }
    clicked = true;
    let stages = [];
    let speed = 0;
    const algorithm = e.target.id;
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

  const newArray = (n) => {
    stopTimeout();
    setArray(generateArray(n));
  };

  const submitNewArray = (e) => {
    e.preventDefault();
    newArray(size);
  };

  const changeSize = (e) => {
    setSize(e.target.value);
  };

  return (
    <>
      <ArrayContainer>
        {array.map((num, i) => (
          <Bar width={600 / array.length} style={{ height: `${num}px` }} key={i} />
        ))}
      </ArrayContainer>
      <ButtonContainer>
        <NewArrayForm onSubmit={submitNewArray}>
          <FormInputButton type="submit" onClick={newArray} value="Generate New Array" />
          <FormInputText type="number" min="10" max="300" onChange={changeSize} value={size} />
        </NewArrayForm>
        <SortButton type="button" id="bubbleSort" onClick={sort}>Bubble Sort</SortButton>
        <SortButton type="button" id="quickSort" onClick={sort}>Quick Sort</SortButton>
        <SortButton type="button" id="mergeSort" onClick={sort}>Merge Sort</SortButton>
        <SortButton type="button" id="stop" onClick={stopTimeout}>Stop</SortButton>
      </ButtonContainer>
    </>
  );
};

export default App;
