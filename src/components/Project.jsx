import React from 'react'

const Project = ({ viewProject, viewCode, img2, ProjectName, labels }) => {
  const getRandomId = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  return (
    <div className='project_container'>
      <div className='project_img_container'>
        <img src={img2} id='img2' alt='imagen 2' />
        <div className='links-projects'>
          <a
            href={viewProject}
            target='_blank'
            rel='noreferrer'
          >
            <p>VIEW PROJECT</p>
          </a>
          <a
            href={viewCode}
            target='_blank'
            rel='noreferrer'
          >
            <p>VIEW CODE</p>
          </a>
        </div>
      </div>
      <h3>{ProjectName}</h3>
      <div className='labels_containers'>
        {labels.map(label => <p key={getRandomId(1, 10000)}>{label}</p>)}
      </div>
      <div className='enlaces_mobile'>
        <a
          href={viewProject}
          target='_blank'
          rel='noreferrer'
        >
          <p>VIEW PROJECT</p>
        </a>
        <a
          href={viewCode}
          target='_blank'
          rel='noreferrer'
        >
          <p>VIEW CODE</p>
        </a>
      </div>
    </div>
  )
}

export default Project
