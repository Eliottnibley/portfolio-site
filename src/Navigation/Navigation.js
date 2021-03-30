import './Navigation.css'
import Button from '@material-ui/core/Button'

const Navigation = (props) => {

  const sectionsArray = props.sections.map((elem) => {
    return (
      <Button 
        className='nav-button'
        fullWidth={true}
        size='large'
        key={elem}
        style={{justifyContent: 'start', paddingLeft: '20px', color: '#0B5563'}}
        onClick={() => {props.updateScroll(elem)}}
      >
        {elem}
      </Button>
    )
  })

  return (
    <div id='navigation-container'>
      <div className='name-and-title' onClick={() => {props.updateScroll('name')}}>
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