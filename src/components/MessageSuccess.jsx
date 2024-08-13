import React from 'react'

const MessageSuccess = ({ msgSend }) => {
  return (
    <div className={msgSend ? 'message_sent_container' : 'hide'}>
      <div className='title_msg_sent'>
        <h2>MESSAGE SENT!</h2>
      </div>
      <p>Thank you for reaching out and expressong interest in my services. I will come back to you soon as</p>
    </div>
  )
}

export default MessageSuccess
