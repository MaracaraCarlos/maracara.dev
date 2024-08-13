import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import MessageSuccess from './MessageSuccess'

const ContactSection = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()
  const [msgSend, setMsgSend] = useState(false)

  const onSubmit = (data) => {
    console.log(data)
    setMsgSend(true)
    // setTimeout(() => {
    //   setMsgSend(false)
    // }, 5000)
  }

  return (
    <section className='contact_section' id='contact'>
      <div className='contact_section-left'>
        <h1>Contact</h1>
        <p>I would love to hear about your project and how I could help. Please fill in the form, and I'll get back to you as soon as posible.</p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        method='post'
        action='1.php'
        autoComplete='off'
        className={msgSend ? 'hide' : 'formulario'}
      >
        <div className='container_input'>
          <input
            id='name_form'
            type='text'
            name='nombre'
            autoComplete='off'
            placeholder='NAME'
            {...register('name', {
              required: true,
              minLength: 3,
              maxLength: 30
            })}
          />
          {errors.name?.type === 'required' && <p className='error_msg'>This field is required</p>}
          {errors.name?.type === 'minLength' && <p className='error_msg'>The name must be at least 3 characters</p>}
          {errors.name?.type === 'maxLength' && <p className='error_msg'>The name cannot be more than 30 characters</p>}
        </div>
        <div className='container_input'>
          <input
            id='email_from'
            type='email'
            name='correo'
            autoComplete='off'
            placeholder='EMAIL'
            {...register('email', {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
            })}
          />
          {errors.email?.type === 'required' && <p className='error_msg'>This field is required</p>}
          {errors.email?.type === 'pattern' && <p className='error_msg'>The email format is incorrect</p>}
        </div>
        <div className='container_input'>
          <textarea
            id='message_form'
            type='textarea'
            autoComplete='off'
            placeholder='MESSAGE'
            {...register('message', {
              required: true,
              minLength: 20
            })}
          />
          {errors.message?.type === 'required' && <p className='error_msg'>This field is required</p>}
          {errors.message?.type === 'minLength' && <p className='error_msg'>The message must be at least 20 characters</p>}
        </div>
        <div className='container_btn_send_btn'>
          <input id='send_message_btn' type='submit' value='SEND MESSAGE' />
        </div>
      </form>
      <MessageSuccess
        msgSend={msgSend}
      />
    </section>
  )
}

export default ContactSection
