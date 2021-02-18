import './Navigation.css'
import Button from '@material-ui/core/Button'

const Navigation = (props) => {
  const sections = ['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact', 'Resume']

  const sectionsArray = sections.map((elem) => {
    return (
      <Button 
        className='nav-button'
        fullWidth={true}
        size='large'
        style={{justifyContent: 'start', paddingLeft: '20px', color: '#0B5563'}}
      >
        {elem}
      </Button>
    )
  })

  return (
    <div className="navigation-container">
      <div className='name-and-title'>
        <h1>
          Eliott Nibley
        </h1>
        <h2>
          Web Developer and Software Engineer
        </h2>
      </div>
      <div className='nav-options'>
        {sectionsArray}
      </div>
    </div>
  )
}

export default Navigation