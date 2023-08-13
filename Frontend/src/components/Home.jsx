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
        <div className='Sub__heading'>
        Namaste🙏, Welcome to Iris prediction project.
        </div>
        <div className='body__content'>
        The Iris Prediction Project aims to address this challenge by employing advanced data science techniques to predict the species of iris flowers based on their various attributes. Iris flowers, known for their distinct species—setosa, versicolor, and virginica—present a classic problem in the field of pattern recognition and classification. This project delves into exploring and implementing different machine learning algorithms, leveraging a dataset containing measurements of iris petals and sepals. By delving into this project, we seek to not only deepen our understanding of machine learning methodologies but also contribute to the broader knowledge of predictive modeling in the context of botanical species classification.
        
        </div>
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