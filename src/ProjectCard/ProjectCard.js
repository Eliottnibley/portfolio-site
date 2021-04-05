import IconButton from '@material-ui/core/IconButton'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import { useState } from 'react';
import './ProjectCard.css'

const ProjectCard = ({prjData}) => {
  const [showMore, setShowMore] = useState(false)

  const frontEndMap = prjData.frontend.map((elem, ind) => (
    <Tooltip title={elem} placement='bottom' TransitionComponent={Zoom} arrow>
      <img src={`/assets/${elem}.png`} key={ind}/>
    </Tooltip>
  ))

  const backEndMap = prjData.backend.map((elem, ind) => (
    <Tooltip title={elem} placement='bottom' TransitionComponent={Zoom} arrow>
      <img src={`/assets/${elem}.png`} key={ind}/>
    </Tooltip>
  ))

  const otherMap = prjData.otherTech.map((elem, ind) => (
    <Tooltip title={elem} placement='bottom' TransitionComponent={Zoom} arrow>
      <img src={`/assets/${elem}.png`} key={ind}/>
    </Tooltip>
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
        <h4>Links</h4>
        <div className='site-links'>
          <Tooltip title='View Site' placement='bottom' TransitionComponent={Zoom} arrow>
            <a href={prjData.siteLink} target='_blank'>
              <IconButton style={{color: '#0b5563'}}>
                <LinkIcon/>
              </IconButton>
            </a>
          </Tooltip>
          <Tooltip title='View Source' placement='bottom' TransitionComponent={Zoom} arrow>
            <a href={prjData.gitLink} target='_blank'>
              <IconButton style={{color: '#0b5563'}}>
                <GitHubIcon/>
              </IconButton>
            </a>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard