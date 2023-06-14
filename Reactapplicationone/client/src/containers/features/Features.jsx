import React from 'react'
import Feature from '../../components/feature/Feature'
import './features.css'

const featuresData=[
  {
    title:'Chatbots',
    text:"hello"
  },
  {
    title:'Knowledgebase',
    text:"hello"
  },
  {
    title:'Education',
    text:"hello"
  },
  {
    title:'EducationXX',
    text:"helloXX"
  }

]


const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum dolorem architecto natus tempore odit ipsa iure aperiam cum? Ab cupiditate quae mollitia aliquid, dolorum nulla cum voluptas esse culpa doloribus!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum asperiores deleniti, illo doloremque amet tenetur reiciendis. Nostrum consequuntur laudantium quidem at aliquam dolorum, repudiandae aperiam maxime praesentium autem enim voluptatum!</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item,index)=>(
          <Feature title={item.title} text={item.text} key={item.title+index}></Feature>

        )
        )}
        
      </div>
    </div>
  )
}

export default Features