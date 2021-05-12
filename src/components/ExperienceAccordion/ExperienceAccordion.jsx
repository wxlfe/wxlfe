import React from 'react';
import PropTypes from 'prop-types';
import './ExperienceAccordion.css';

function ExperienceAccordion({ experience }) {
  const items = experience.map((job, index) => (
    <div key={JSON.stringify(job)} className="accordion-item">
      <div className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${index}`}
          aria-expanded="false"
          aria-controls={`collapse${index}`}
        >
          <h2>{job.title}</h2>
          <img src={job.img} alt={`${job.employer} logo`} />
        </button>
      </div>
      <div
        id={`collapse${index}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading${index}`}
        data-bs-parent="#accordion"
      >
        <div className="accordion-body">{job.description}</div>
      </div>
    </div>
  ));
  return (
    <div className="accordion" id="accordion">
      {items}
    </div>
  );
}

ExperienceAccordion.propTypes = {
  experience: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ExperienceAccordion;
