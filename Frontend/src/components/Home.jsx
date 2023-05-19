import React from 'react'
import './Home.css'
import flower from '../assets/flower.svg'
import image from '../assets/image.jpg'
import { AiFillGithub } from "react-icons/ai";
import { SiKaggle,SiLinkedin } from "react-icons/si";
function Home() {
  return (
    <div className='Home__wrapper'>
      <div className='Home__header'>Iris Prediction</div>
      <img className='Flower__svg' src={flower} alt="Your SVG" />
      <div className='Home__body'>
        <span>
        Namaste🙏, Welcome to Iris prediction project.
        </span>
        <img className="iris__image" src={image} alt='iris_flower'/>
      </div>
      <div className='socials__wrapper'>
        <a href='#'><AiFillGithub color='#FFB5BE' size={40}/></a>
        <a href='#'><SiKaggle color='#FFB5BE' size={40}/></a>
        <a href='#'><SiLinkedin color='#FFB5BE' size={33}/></a>
      </div>
    </div>
  )
}

export default Home