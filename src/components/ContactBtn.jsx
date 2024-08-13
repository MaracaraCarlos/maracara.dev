import React from 'react'

const ContactBtn = ({ typeBtn, textBtn, refencia }) => {
  return (
    <section className='container_contact_btn'>
      <a className={typeBtn} href={refencia}>
        <span className='text'>{textBtn}</span>
        <span className='line -right' />
        <span className='line -top' />
        <span className='line -left' />
        <span className='line -bottom' />
      </a>
    </section>
  )
}

export default ContactBtn
