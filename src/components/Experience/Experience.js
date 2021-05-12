import React from 'react'
import ExperienceAccordion from "../ExperienceAccordion/ExperienceAccordion"

const Experience = () => {
    return (
        <ExperienceAccordion experience={[{title: 'Job 1', employer: "Mohawk Industries", description: 'Description 1', img: 'http://www.mohawkind.com/_images/global/logo.svg'}, {title: 'Job 2', description: 'Description 2'}]}/>
    )
}

export default Experience
