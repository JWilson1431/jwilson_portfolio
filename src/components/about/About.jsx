import React from 'react'
import './about.css'
import ME from '../../assets/Janet.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {FaFolderOpen} from 'react-icons/fa'
import {TbMoodKid} from 'react-icons/tb'
import {FaDog} from 'react-icons/fa'
import {FaJava} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image'/>
        </div>
      </div>

      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
            <FaJava className='about__icon'/>
            <h5>Software Developer</h5>
            <small>Passionate about continued learning of programming and much more</small>
          </article>

          <article className='about__card'>
            <FaDog className='about__icon'/>
            <h5>Veterinary Nurse</h5>
            <small>Loves all animals from big to small</small>
          </article>

          <article className='about__card'>
            <TbMoodKid className='about__icon'/>
            <h5>Mom</h5>
            <small>Mother to 2 children and a few fur babies</small>
          </article>
        </div>

        <p>
        Hello World! I am a veterinary nurse, transitioning into becoming a software developer. After 15 years as a veterinary nurse, I decided to pursue my 
        passion for learning programming languages and so much more. I graduated from WGU with my bachelor degree in Software Development in April 2022. 
        The more I learn about coding and UI design, the more I want to learn! I completed several projects as a student and have continued to 
        work on projects since graduating. When I'm not at work saving lives or working on projects in my spare time, you can usually find me spending 
        time with my 2 children or cuddling with my latest litter of foster kittens.
        </p>

        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>  

    </section>
  )
}

export default About