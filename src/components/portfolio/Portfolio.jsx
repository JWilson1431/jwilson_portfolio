import React from 'react'
import './portfolio.css'
import pic1 from '../../assets/inventory.PNG'
import pic2 from '../../assets/schedule.PNG'
import pic3 from '../../assets/nurse.jpg'
import pic4 from '../../assets/portal.jpg'
import pic5 from '../../assets/pi.jpg'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/navigation/navigation.min.css';

import 'swiper/modules/scrollbar/scrollbar.min.css';


const data= [

{
  avatar: pic1,
  name: 'BAH Medication Inventory',
  review: "Prior to creating this application, my veterinary hospital did not have a true inventory system for controlled substances. The only way that controlled substances were tracked was by writing down the medication in an old notebook. I created this application in order to better track the inventory for these medications. Medications can be either oral or injectable. Each one contains different attributes. Each employee is given a username and password. There can be two types of users which are administrators and general users. Only administrators have access to the user features which include adding or editing a user. Regular users only have access to adding, updating, or deleting a medication. Relevant information about each medication is included such as the name, concentration, quantity in stock, and the size of the vial."
},

{
  avatar: pic2,
  name: ' Telemedicine Appointment Scheduling Application',
  review: "This is a scheduling application for an online telemedicine service. The application connects to a MYSQL database. Customers can be categorized as male or female. Different attributes are included depending on the gender of the customer. This project starts with a log in screen that the user can use to log in to the application. If the user has an appointment within 15 minutes an alert reminds them of the appointment. If they do not have an upcoming appointment, the user is notified that they have successfully logged in and that they have no upcoming appointments. The user is taken to the main screen which has a list of all customers and a list of all appointments. They can navigate to the customers section or the appointment section. The customer screen displays a list of female customers and a list of male customers. Customers can be added, updated, or deleted. The update screen automatically populates the customers information. The information on the add customer screen changes depending on whether the male or female button is clicked. The appointment screen can be displayed by all appointments, monthly appointments, or weekly appointments. Appointments can be added, updated, or deleted. Appointments cannot overlap and must be within business hours."
},

{
  avatar: pic3,
  name: 'Vet Nurse Android Application',
  review: "This is a Java mobile application that I created to help the nurses at my veterinary job. It contains a few pages of quick resources for important calculations and knowledge. The H202 page is a quick reference to induce vomiting if a canine patient has ingested a toxic substance. The dog's weight in pounds is entered into the application and it will inform the nurse how much H202 to instruct the client to give to the dog to induce vomiting. There is also a common medications dosage page. It contains over the counter medications that nurses commonly recommend to clients for issues like vomiting or allergies. The nurse enters the weight of the dog and chooses the medication from a spinner. Upon clicking the calculate button, the recommended dosage is displayed. Another feature of this application is a chocolate toxicity calculator. Clients commonly call to report that their dog has ingested chocolate and the nurse needs to be able to determine if the amount of chocolate is toxic. The dog's weight is entered, along with the amount of chocolate ingested. The type of chocolate is chosen from a spinner. The application then informs the nurse how toxic the chocolate is and a recommended action. New pages will be added to this application soon."
},

{
  avatar: pic4,
  name: 'Student Portal Android Application',
  review: "This is a mobile application designed to be a student portal. It contains terms, courses and assessments. The user can add, edit, or delete terms. Terms contain an ID, a start date and and end date. A term cannot be deleted if it has associated courses. Courses can be added to term. Courses contain a title, ID, start date, end date, status, instructor name, instructor phone number, instructor email, a term number, and a notes section. There is a menu at the top that allows the user to set an alert for either the start date or end date on their phone. They can also share the notes section using this menu. Assessments can be either objective or performance assessments. They contain a title, ID, start date, end date, and assessment type."
},

{ avatar: pic5,
name: 'Google Assistant On Raspberry Pi',
review:'This is a Google Assistant which I made using a Raspberry Pi 4. Similar to a typical google assistant, it features the use of a microphone to issue commands to Google. The google assistant can receive many different commands such as playing music, finding information, accessing calendars and other personal information, and setting reminders. There are speakers attached to the Raspberry Pi for output. The assistant is activated through the works "OK Google" or "Hey Google". '
}

]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Portfolio</h5>
      <h2>My Recent Work</h2>  
      
      <Swiper className='container portfolio__container'
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
           return(
              <SwiperSlide key={index} className='portfolio'>
            <div className='portfolio__pic'>
             <img src ={avatar} />
            </div>
            <h5 className='client_name'> {name} </h5>
            <small className='portfolio__description'>{review}
        </small>
      </SwiperSlide>
      )
    })
  }
  </Swiper> 
    </section>
  )
}

export default Portfolio