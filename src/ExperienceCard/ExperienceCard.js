import './ExperienceCard.css'

// this is an expericne card
const ExperienceCard = ({ expData }) => {

  const responsibilitiesMap = expData.responsibilities.map((elem, ind) => <li key={ind}>{elem}</li>)
  
  return (
    <div className='experience-card-container'>
      <div className='job-header'>
        <div className='company-name'>
          {expData.companyName}
        </div>
        <div className='job-title'>
          {expData.jobTitle}
        </div>
      </div>
      <div className='mobile-job-title'>
          {expData.jobTitle}
      </div>
      <div className='job-description'>
        {expData.description}
      </div>
      <ul className='job-responsibilities'>
        {responsibilitiesMap}
      </ul>
      <div className='job-footer'>
        {`${expData.startMonth} ${expData.startYear} - ${expData.current ? 'Current' : expData.endMonth + ' ' + expData.endYear} | ${expData.city}, ${expData.state}`}
      </div>
    </div>
  )
} 

export default ExperienceCard