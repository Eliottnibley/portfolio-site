import './SkillsCard.css'

const Skill = ({ tech }) => {

  return (
    <div className='skill-container'>
      <div className='logo'>
        <img src={`/assets/${tech}.png`}/>
      </div>
      <div className='tech-name'>{tech}</div>
    </div>
  )
}

export default Skill