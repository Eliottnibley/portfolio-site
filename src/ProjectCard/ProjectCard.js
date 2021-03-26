import Axios from 'axios'
import s3 from 'react-aws-s3'
import { useEffect } from 'react'
import './ProjectCard.css'

const ProjectCard = ({prjData}) => {

  const config = {
    bucketName: 'eliottportfoliobucket',
    region: 'us-west-1',
    
  }

  useEffect(() => {
    const ReactS3 = new s3();
  }, [])

  return (
    <div className='project-card-container'>

    </div>
  )
}

export default ProjectCard