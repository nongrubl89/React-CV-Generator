import React from "react";

function EmploymentSection(props) {
  //   const { jobs } = props;
  console.log(props);

  const jobsDiv = props.emplArray.map((job, i) => (
    <div
      key={i}
      className="work-section-cv"
      data-nav="employment"
      data-index={i}
    >
      <h4 className="h4-cv title">Employment History</h4>
      <h4 className="h4-cv" id="employer">
        {job.employer}
      </h4>
      <h4 className="h4-cv" id="title">
        {job.title}
      </h4>
      <p className="dates-of-empledu">
        {job.emplBeginDate.toLocaleString("default", { month: "long" }) +
          " " +
          job.emplBeginDate.toLocaleString("default", { year: "numeric" }) +
          " - " +
          job.emplEndDate.toLocaleString("default", { month: "long" }) +
          " " +
          job.emplEndDate.toLocaleString("default", { year: "numeric" })}
      </p>
      <p id="duty">{job.duties}</p>
      <button type="button" className="submit-add" onClick={props.editSection}>
        Edit
      </button>
    </div>
  ));
  return props.emplArray ? <React.Fragment>{jobsDiv}</React.Fragment> : null;
}

export default EmploymentSection;
