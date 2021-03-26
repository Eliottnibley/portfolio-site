import { useState } from 'react';
import './App.css';
import { data } from './data'
import Nav from './Navigation/Navigation'
import ExpCard from './ExperienceCard/ExperienceCard'
import PrjCard from './ProjectCard/ProjectCard'

function App() {
  const [sections, setSections] = useState(['about', 'experience', 'projects', 'skills', 'education', 'contact', 'resume'])
  const [headerIsHidden, setheaderIsHidden] = useState(false)

  const updateScroll = (section) => {
    if (section === 'resume') {
      return
    }
    if (section === 'name') {
      window.scrollTo(0, 0)
      return
    }
    window.scrollTo(0, 1 + window.scrollY + document.getElementById(`${section}-container`).getBoundingClientRect().y)
  }

  // Create experience card components from projects array in data file
  const experienceMap = data.experience.map((elem, ind) => <ExpCard key={ind} expData={elem}/>)

  // Create project card components from projects array in data file
  const projectmap = data.projects.map((elem, ind) => <PrjCard key={ind} prjData={elem}/>)

  return (
    <div className="App">
      <div id='mobile-header'>

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
        <section id='contact-container' style={{'minHeight': '99vh', 'width': '100%'}}>
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