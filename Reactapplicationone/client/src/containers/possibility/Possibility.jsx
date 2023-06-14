import React from 'react'
import './possibility.css'
import possibilityImage from "../../assets/possibility.png"

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possibility</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam id amet quia nobis sit libero et, esse mollitia eos omnis aperiam a sint maiores praesentium nihil consequuntur, similique, dolorem quo.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility