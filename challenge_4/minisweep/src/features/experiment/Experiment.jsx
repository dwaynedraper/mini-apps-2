import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { doSomething } from './expSlice';

export function Experiment() {
  const value = useSelector((state) => state.exp.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  return (
    <div className="container">
      
    </div>
  )
}