import React from 'react';
import './App.css';

function CountList(props) {
  const { count, item, updateCount, reset, deleteRow, value } = props;

  return (
    <div className="list-group-item">
      <button type="button" className="btn" onClick={() => updateCount(item, -(value))}>-{value}</button>
      <span>{count}</span>
      <button type="button" className="btn" onClick={() => updateCount(item, value)}>+{value}</button>
      <button type="button" className="btn" onClick={() => reset(item)}>Reset</button>
      <button type="button" className="btn" onClick={() => deleteRow(item)}>Delete</button>
    </div >
  );
}

export default CountList;
