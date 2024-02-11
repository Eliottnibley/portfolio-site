import './Navigation.css'
import Button from '@material-ui/core/Button'
import { useState } from 'react'
import { data } from '../data'

const Navigation = (props) => {

  const [highlighted, setHighlighted] = useState('')

  window.addEventListener('scroll', () => {
    const section = getHighlightedSection()
    if (section != highlighted) {
      setHighlighted(section)
    }
  })

  const getHighlightedSection = () => {
    const about = document.getElementById('about-container')
    const experience = document.getElementById('experience-container')
    const projects = document.getElementById('projects-container')
    const skills = document.getElementById('skills-container')
    const education = document.getElementById('education-container')
    const contact = document.getElementById('contact-container')

    if (contact.getBoundingClientRect().y < window.innerHeight / 3) {
      return 'contact'
    }
    else if (education.getBoundingClientRect().y < window.innerHeight / 3) {
      return 'education'
    }
    else if (skills.getBoundingClientRect().y < window.innerHeight / 3) {
      return 'skills'
    }
    else if (projects.getBoundingClientRect().y < window.innerHeight / 3) {
      return 'projects'
    }
    else if (experience.getBoundingClientRect().y < window.innerHeight / 3) {
      return 'experience'
    }
    else if (about.getBoundingClientRect().y < window.innerHeight / 3) {
      return 'about'
    }
    else {
      return ''
    }
  }

  // Map buttons from sections array data
  const sectionsArray = props.sections.map((elem) => {
    const weight = highlighted == elem ? '1000' : '500'
    const margin = highlighted == elem ? '20px' : '0px'
    const color = highlighted == elem ? '#0B556320' : '#FFFFFF'
    return (
      <Button
        className='nav-button'
        fullWidth={true}
        size='large'
        key={elem}
        style={{ justifyContent: 'start', paddingLeft: '20px', color: '#0B5563', fontWeight: weight, transition: '250ms', marginLeft: margin, backgroundColor: color }}
        onClick={() => { props.updateScroll(elem) }}
      >
        {elem}
      </Button>
    )
  })

  return (
    <div id='navigation-container'>
      <div className='name-and-title' onClick={() => { props.updateScroll('name') }}>
        <h1>
          {data.name}
        </h1>
        <h2>
          {data.title}
        </h2>
      </div>
      <div className='nav-options'>
        {sectionsArray}
      </div>
    </div>
  )
}

export default Navigation