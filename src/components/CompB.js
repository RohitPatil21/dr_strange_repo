import React, { useEffect, useState } from 'react'
import '../styles/Comps.css';
import { showData } from '../app/slices';
import { useSelector, useDispatch } from 'react-redux'


const CompB = () => {

  const dispatch = useDispatch();

  const [inputData, setInputData] = useState("");     // state for store the input data.
  
  const changeHandler = (event) => {          // for handling the onChange event
    const data = event.target.value;
    setInputData(data);
  }
 
  function sendData() {                       // function for dispatch the action with payload
    dispatch(showData(inputData));
  }

  useEffect(() => {                           // component did update when state will updated.
    sendData();
  },[inputData]);

  return (
    <div className="CompB-container">
    
      <input placeholder='Enter Text Here...' value = {inputData} onChange={changeHandler} />

    </div>
  )
}

export default CompB;