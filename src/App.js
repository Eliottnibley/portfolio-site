import './App.css';
import Nav from './Navigation/Navigation'

function App() {

  const sections = ['about', 'experience', 'projects', 'skills', 'education', 'contact', 'resume']

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

  return (
    <div className="App">
      <Nav sections={sections} updateScroll={updateScroll}/>
      <div id='contents-container'>
        <div id='photo-container'>
          
        </div>
        <div id='about-container'>
          <div className='section-header'>
            About
          </div>
        </div>
        <div id='experience-container'>
          <div className='section-header'>
            Experience
          </div>
        </div>
        <div id='projects-container'>
          <div className='section-header'>
            Projects
          </div>
        </div>
        <div id='skills-container'>
          <div className='section-header'>
            Skills
          </div>
        </div>
        <div id='education-container'>
          <div className='section-header'>
            Education
          </div>
        </div>
        <div id='contact-container' style={{'min-height': '99vh', 'width': '100%'}}>
          <div className='section-header'>
            Contact
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;