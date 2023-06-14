import React from 'react'
import './header.css'
import people from "../../assets/people.png"
import ai from "../../assets/ai.png"

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id="home">
      <div className='gpt3__header-container'>
        <h1 className='gradient__text'>Let's Build Something amazing with GPT-3 OpenAI</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt porro repellendus nulla laboriosam sit doloribus corporis iure quisquam optio, mollitia saepe autem sint voluptatum omnis voluptas adipisci atque temporibus ut.</p>

        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Email'/>
          <button type="button">Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt="people" />
          <p>Lorem ipsum dolor, sit amet</p>
        </div>
        <div className='gpt3__header-image'>
          <img src={ai} alt="ai" />
        </div>
      </div>
    </div>
  )
}

export default Header