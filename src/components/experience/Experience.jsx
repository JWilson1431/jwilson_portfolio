import React from 'react'
import './experience.css'
import {FaCheckCircle} from 'react-icons/fa'
import {FaAws} from 'react-icons/fa'
import {FaPython} from 'react-icons/fa'
import {SiMysql} from 'react-icons/si'
import {IoLogoNodejs} from 'react-icons/io'
import {DiJavascript1} from 'react-icons/di'
import {FaUserEdit} from 'react-icons/fa'
import {FaCss3} from 'react-icons/fa'
import {SiJava} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Skills</h3>
          <div className="experience__content">

          <article className="experience__details">
              <SiJava className='experience__details-icon' />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <FaCheckCircle className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience__details'>
              <FaCss3 className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience__details'>
              <DiJavascript1 className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience__details'>
              <FaUserEdit className='experience__details-icon'/>
              <div>
                <h4>User Interface Design</h4>
                <small className='text-light'>Basic</small>
                </div>
            </article>

            <article className='experience__details'>
              <IoLogoNodejs className='experience__details-icon'/>
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            

            <article className='experience__details'>
              <SiMysql className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <FaPython className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience__details'>
              <FaAws className='experience__details-icon' />
              <div>
                <h4>AWS</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            
            <article className='experience__details'>
              <FaReact className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

          </div>
        </div>
      

      

  </div>
    </section>
  )
}

export default Experience