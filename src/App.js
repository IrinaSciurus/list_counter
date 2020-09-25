import React, { useState } from 'react';
import CountList from './CountList';
import Controller from './Controller';

import './App.css';

function App() {
  const [count, setCount] = useState([0]);
  const [value, setValue] = useState(0);

  const inputHandler = (event, updateValue) => {
    setValue(Number(event.target.value))
  }



  const addCounter = () => {
    setCount([...count, 0])
  };

  const updateCount = (item, val) => {
    const updateCounter = [...count];
    updateCounter[item] += val;
    setCount(updateCounter);
  };

  const reset = (item) => {
    const updateCounter = [...count];
    updateCounter[item] = 0;
    setCount(updateCounter);
  };

  const deleteRow = (item) => {
    setCount(count.filter((el, i) => i !== item));
  };

  const resetAll = () => {
    setCount(count.map(el => 0));
  };

  const deleteAll = () => {
    setCount([0]);
  };

  return (
    <div>
      <h3>AddCounters</h3>
      <h6>You can add only 10 counters!</h6>
      <Controller
        addCounter={addCounter}
        resetAll={resetAll}
        deleteAll={deleteAll}
        count={count}
        inputHandler={inputHandler}
        value={value}
        setValue={setValue}
      />

      {count.map((el, index) => <CountList
        count={el}
        value={value}
        key={index}
        item={index}
        updateCount={updateCount}
        reset={reset}
        deleteRow={deleteRow}
        inputHandler={inputHandler}
      />
      )
      }
    </div >
  );
}

export default App;
