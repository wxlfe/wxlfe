import React from 'react'

function ExperienceAccordionItem(props) {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    {props.title}
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne">
                <div className="accordion-body">
                    {props.body}
                </div>
            </div>
        </div>
    )
}

export default ExperienceAccordionItem
