import { useState } from 'react';
import './App.css';
import { data } from './data'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Nav from './Navigation/Navigation'
import ExpCard from './ExperienceCard/ExperienceCard'
import PrjCard from './ProjectCard/ProjectCard'
import Button from '@material-ui/core/Button'

function App() {
  const sections = ['about', 'experience', 'projects', 'skills', 'education', 'contact', 'resume']
  const [navIsOpen, setNavIsOpen] = useState(false)

  const updateScroll = (section) => {
    if (section === 'resume') {
      return
    }
    if (section === 'name') {
      window.scrollTo(0, 0)
      return
    }
    window.scrollTo(0, (window.innerWidth <= 800 ? -59 : 0) + window.scrollY + document.getElementById(`${section}-container`).getBoundingClientRect().y)
  }



  // Create experience card components from projects array in data file
  const experienceMap = data.experience.map((elem, ind) => <ExpCard key={ind} expData={elem}/>)

  // Create project card components from projects array in data file
  const projectmap = data.projects.map((elem, ind) => <PrjCard key={ind} prjData={elem}/>)

  // mapping sections used for mobile navigation tab
  const mobileNavArray = sections.map((elem) => {
    return (
      <Button 
        className='mobile-nav-button'
        fullWidth={true}
        size='large'
        key={elem}
        style={{justifyContent: 'start', paddingLeft: '20px', color: '#0B5563'}}
        onClick={() => {
          updateScroll(elem)
          setNavIsOpen(false)
        }}
      >
        {elem}
      </Button>
    )
  })

  return (
    <div className="App">
      <div id='mobile-header'>
        <div id='mobile-menu-button'>
          <IconButton onClick={() => setNavIsOpen(!navIsOpen)} style={{color: '#0B5563'}}>
            <MenuIcon/>
          </IconButton>
        </div>
        <h1>Eliott Nibley</h1>
        <h2>Web Developer and Software Engineer</h2>
      </div>
      <div id={`mobile-nav-container-${navIsOpen}`}>
        {mobileNavArray}
      </div>
      <Nav sections={sections} updateScroll={updateScroll}/>
      <div id='contents-container'>
        <section id='photo-container'>
          
        </section>
        <section id='about-container'>
          <h3 className='section-header'>
            About
          </h3>
          <div id='about-content'>

          </div>
        </section>
        <section id='experience-container'>
          <h3 className='section-header'>
            Experience
          </h3>
          <div id='exerience-content'>
            {experienceMap}
          </div>
        </section>
        <section id='projects-container'>
          <h3 className='section-header'>
            Projects
          </h3>
          <div id='projects-content'>
            {projectmap}
          </div>
        </section>
        <section id='skills-container'>
          <h3 className='section-header'>
            Skills
          </h3>
          <div id='skills-content'>

          </div>
        </section>
        <section id='education-container'>
          <h3 className='section-header'>
            Education
          </h3>
          <div id='education-content'>

          </div>
        </section>
        <section id='contact-container' style={{'minHeight': '100vh', 'width': '100%'}}>
          <h3 className='section-header'>
            Contact
          </h3>
          <div id='contact-content'>

          </div>
        </section>
      </div>
    </div>
  );
}

export default App;