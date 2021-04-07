import Skill from './Skill'
import './SkillsCard.css'

const SkillsCard = ({ data, section }) => {

  const techMap = data.map((elem, ind) => <Skill tech={elem} key={ind}/>)

  return (
    <div className='skills-card-container'>
      <h4>{section}</h4>
      <div className='skills'>
        {techMap}
      </div>
      <div className='skills-splice'>
        {techMap.slice(0, 3)}
      </div>
      <div className='skills-splice'>
        {techMap.slice(3)}
      </div>
    </div>
  )
}

export default SkillsCard