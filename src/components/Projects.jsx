import React from 'react'
import ContactBtn from './ContactBtn'
import Project from './Project'
import TodoAppL from '../images/TodoAppLight.png'
import Pokemon1 from '../images/Squirtle.png'
import Ecommerce1 from '../images/Ecomerce1.png'
import Pricing1 from '../images/active-states.jpg'
import FormRed from '../images/FormRed.png'
import Weather from '../images/Weather.png'
import Calculator1 from '../images/Calculator1.png'
import Link from '../images/Link.png'

const Projects = () => {
  return (
    <section className='section_projects'>
      <div className='header_projects'>
        <h1>Projects</h1>
        <ContactBtn
          refencia='#contact'
          typeBtn='contact_btn'
          textBtn='CONTACT ME'
        />
      </div>
      <div className='all_projects'>
        <Project
          viewProject='https://maracaracarlos.github.io/Frontend-Mentor-Intro-component-with-sign-up-form/'
          viewCode='https://github.com/MaracaraCarlos/Frontend-Mentor-Intro-component-with-sign-up-form'
          img2={FormRed}
          ProjectName='Sign Up Form'
          labels={['HTML', 'CSS', 'JavaScript']}
        />
        <Project
          viewProject='https://maracaracarlos.github.io/Pokemon-Search-App/'
          viewCode='https://github.com/MaracaraCarlos/Pokemon-Search-App'
          img2={Pokemon1}
          ProjectName='Pokémon App'
          labels={['HTML', 'CSS', 'JavaScript']}
        />
        <Project
          viewProject='https://pricing-toggle-cems.netlify.app/'
          viewCode='https://github.com/MaracaraCarlos/Princing-component-with-toggle-master'
          img2={Pricing1}
          ProjectName='Pricing Component'
          labels={['HTML', 'CSS', 'JavaScript', 'React']}
        />
        <Project
          viewProject='https://link-profile-maracara.netlify.app/'
          viewCode='https://github.com/MaracaraCarlos/Link-Profile'
          img2={Link}
          ProjectName='Calculator Theme App'
          labels={['HTML', 'CSS', 'JavaScript', 'React', 'Typescript']}
        />
        <Project
          viewProject='https://ecommerce-product-page-cems.netlify.app/'
          viewCode='https://github.com/MaracaraCarlos/Ecommerce-Product-Page'
          img2={Ecommerce1}
          ProjectName='E-commerce Product Page'
          labels={['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap']}
        />
        <Project
          viewProject='https://meek-sherbet-7f09d4.netlify.app/'
          viewCode='https://github.com/MaracaraCarlos/TODO-App'
          img2={TodoAppL}
          ProjectName='Todo App'
          labels={['HTML', 'CSS', 'JavaScript', 'React']}
        />
        <Project
          viewProject='https://weather-app-cems.netlify.app/'
          viewCode='https://github.com/MaracaraCarlos/Weather-App'
          img2={Weather}
          ProjectName='Weather App'
          labels={['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap']}
        />
        <Project
          viewProject='https://calculator-theme-cems.netlify.app/'
          viewCode='https://github.com/MaracaraCarlos/Calculator-Theme'
          img2={Calculator1}
          ProjectName='Calculator Theme App'
          labels={['HTML', 'CSS', 'JavaScript', 'React', 'SASS']}
        />
      </div>
    </section>
  )
}

export default Projects
