import React from 'react'
import './footer.css'
import gpt3Logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione accusantium id ab voluptate dolor cum, consequuntur adipisci, quo reprehenderit commodi culpa obcaecati? Totam neque perferendis blanditiis eius, laudantium quo porro.</h1>

      </div>
      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt="logo" />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo eligendi est nihil necessitatibus vitae illo exercitationem cum voluptatum non maxime impedit, neque qui totam adipisci sequi dolorum, atque numquam enim.</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>

        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>

        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Chikago</p>
          <p>085-132567</p>
          <p>info@payme.net</p>

        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>2021 GPT-3.All right reserved.</p>

      </div>
    </div>
  )
}

export default Footer