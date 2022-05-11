import React from 'react'
import '../styles/Comps.css';
import { useSelector } from 'react-redux';


const CompC = () => {

  const data = useSelector((state) => state.showData.data);    // for getting the data from redux store.

  return (
    <div className='CompC-container'>
        
        {data? <h2 className='output-text'> {data} </h2> : <h2 className='before-output-text'>Your Text Will Be Shown Here....</h2>  }               {/* Conditional Rendering  */}
        
    </div> 
  )
}

export default CompC;