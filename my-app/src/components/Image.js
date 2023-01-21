import React from 'react'

export default function Image(props) {
  return (
    <div className='image'>
        <div className='pic'>Image Here</div>
        <div className='form'>
            <h4>Enter your answer here:</h4>
            <input className='input' ref={props.inputRefAnswer}></input>
            <button className='submit-button' onClick={props.onSubmit}>Enter</button>
        </div>
    </div>
  )
}
