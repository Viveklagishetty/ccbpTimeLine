// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {pritemDetails} = props
  const {
    projectTitle,
    duration,
    description,
    imageUrl,
    projectUrl,
  } = pritemDetails

  return (
    <div className="project-card-container">
      <img src={imageUrl} className="image" alt="project" />
      <div className="title-duration-container">
        <h1 className="title">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a className="link" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
