import React from 'react'
import "./whatgpt3.css"
import Feature from "../../components/feature/Feature"


const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id="whpt3">
      <div className='gpt3__whatgpt3-feature'>
        <Feature title='What is GPT-3' text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil recusandae inventore error aliquid numquam adipisci modi necessitatibus quis quia, ad, laborum magni. Dolores iure nobis, voluptates sapiente non blanditiis sunt."></Feature>

      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Chatbots" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, magnam autem ab labore sapiente eum odit. Deleniti temporibus eius velit, incidunt odio, eum eveniet illum suscipit quam ratione laborum! Corporis!"></Feature>
        <Feature title="Knowledgebase" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, magnam autem ab labore sapiente eum odit. Deleniti temporibus eius velit, incidunt odio, eum eveniet illum suscipit quam ratione laborum! Corporis!"></Feature>
        <Feature title="Education" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, magnam autem ab labore sapiente eum odit. Deleniti temporibus eius velit, incidunt odio, eum eveniet illum suscipit quam ratione laborum! Corporis!"></Feature>
      </div>
    </div>
  )
}

export default WhatGPT3