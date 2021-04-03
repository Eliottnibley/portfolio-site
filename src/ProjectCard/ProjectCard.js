import IconButton from '@material-ui/core/IconButton'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useState } from 'react';
import './ProjectCard.css'

const ProjectCard = ({prjData}) => {
  const [showMore, setShowMore] = useState(false)

  const frontEndMap = prjData.frontend.map((elem, ind) => (
    <img src={`/assets/${elem}.png`} title={elem} key={ind}/>
  ))

  const backEndMap = prjData.backend.map((elem, ind) => (
    <img src={`/assets/${elem}.png`} title={elem} key={ind}/>
  ))

  const otherMap = prjData.otherTech.map((elem, ind) => (
    <img src={`/assets/${elem}.png`} title={elem} key={ind}/>
  ))

  return (
    <div className='project-card-container'>
      <div className='project-card-front' style={{height: showMore ? '0px' : '100%'}}>
        <div className='project-image-container' style={{backgroundImage: `url(/assets/${prjData.image})`}}>
        </div>
        <span>
          <div>{prjData.name}</div>
          <IconButton onClick={() => setShowMore(!showMore)} style={{color: '#0B5563'}}>
            <MoreHorizIcon/>
          </IconButton>
        </span>
        <p>{prjData.description}</p>
      </div>
      <div className='project-card-more' style={{height: showMore ? '100%' : '0px'}}>
        <div className='more-header'>
          <div>TECH USED</div>
          <IconButton onClick={() => setShowMore(!showMore)} style={{color: '#0B5563'}}>
            <ArrowBackIcon/>
          </IconButton>
        </div>
        <h4>Front-end</h4>
        <span>{frontEndMap}</span>
        <h4>Back-end</h4>
        <span>{backEndMap}</span>
        <h4>Other</h4>
        <span>{otherMap}</span>
      </div>
    </div>
  )
}

export default ProjectCard