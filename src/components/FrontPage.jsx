import React from 'react'
import ContactBtn from './ContactBtn'

const FrontPage = () => {
  return (
    <section className='front_page'>
      <div className='top_front_page'>
        <h1>Nice to meet you! I'm <span>Carlos Maracara</span>.</h1>
        <p>Based in Venezuela, I'm a front-end developer passionate about building accessible web apps that users love.</p>
      </div>
      <ContactBtn
        refencia='#contact'
        typeBtn='contact_btn'
        textBtn='CONTACT ME'
      />
    </section>
  )
}

export default FrontPage
