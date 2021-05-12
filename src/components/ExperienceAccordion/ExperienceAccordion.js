import React from 'react'
import './ExperienceAccordion.css'

const ExperienceAccordion = (props) => {
    return (
        <div className="accordion" id="accordion">
            {props.experience.map((job,index) =>
                <div key={index} className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + index} aria-expanded="false" aria-controls={"collapse" + index}>
                            <div className="accordion-button-content">
                                <h2>{job.title}</h2>
                                <img src={job.img} alt={job.employer + " logo"}></img>
                            </div>
                        </button>
                    </h2>
                    <div id={"collapse" + index} className="accordion-collapse collapse" aria-labelledby={"heading" + index} data-bs-parent="#accordion">
                        <div className="accordion-body">
                            {job.description}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ExperienceAccordion
