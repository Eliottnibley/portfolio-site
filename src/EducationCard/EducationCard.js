import './EducationCard.css'

// this is an education card
const EducationCard = ({ eduData }) => {

  const responsibilitiesMap = eduData.responsibilities.map((elem, ind) => <li key={ind}>{elem}</li>)

  return (
    <div className='education-card-container'>
      <div className='job-header'>
        <div className='company-name'>
          {eduData.companyName}
        </div>
        <div className='job-title'>
          {eduData.jobTitle}
        </div>
      </div>
      <div className='mobile-job-title'>
        {eduData.jobTitle}
      </div>
      <div className='job-description'>
        {eduData.description}
      </div>
      <ul className='job-responsibilities'>
        {responsibilitiesMap}
      </ul>
      <div className='job-footer'>
        {`${eduData.endMonth} ${eduData.endYear} | ${eduData.city}, ${eduData.state}`}
      </div>
    </div>
  )
}

export default EducationCard