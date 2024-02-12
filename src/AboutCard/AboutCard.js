import './AboutCard.css'

// this is an about card
const AboutCard = ({ aboutData }) => {

  const responsibilitiesMap = aboutData.responsibilities.map((elem, ind) => <li key={ind}>{elem}</li>)

  return (
    <div className='about-card-container'>
      <div className='profile-image-container'>

      </div>
      <div className='job-header'>
        <div className='company-name'>
          {aboutData.companyName}
        </div>
        <div className='job-title'>
          {aboutData.jobTitle}
        </div>
      </div>
      <div className='mobile-job-title'>
        {aboutData.jobTitle}
      </div>
      <div className='job-description'>
        {aboutData.description}
      </div>
      <ul className='job-responsibilities'>
        {responsibilitiesMap}
      </ul>
      <div className='job-footer'>
        {`${aboutData.endMonth} ${aboutData.endYear} | ${aboutData.city}, ${aboutData.state}`}
      </div>
    </div>
  )
}

export default AboutCard