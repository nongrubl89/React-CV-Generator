import React from "react";

function EducationSection(props) {
  const eduDiv = props.eduArray.map((edu, i) => (
    <div data-index={i} data-nav="education" key={i} className="edu-section-cv">
      <h4 className="h4-cv title">Education History</h4>
      <h4 className="h4-cv">{edu.institution}</h4>
      <h4 className="h4-cv">{edu.typeOfEd}</h4>
      <p>{edu.fieldOfStudy}</p>
      <p className="dates-of-empledu">
        {edu.eduBeginDate.toLocaleString("default", { month: "long" }) +
          " " +
          edu.eduBeginDate.toLocaleString("default", { year: "numeric" }) +
          " - " +
          edu.eduEndDate.toLocaleString("default", { month: "long" }) +
          " " +
          edu.eduEndDate.toLocaleString("default", { year: "numeric" })}
      </p>
      <button type="button" className="submit-add" onClick={props.editSection}>
        Edit
      </button>
    </div>
  ));
  return props.eduArray ? <React.Fragment>{eduDiv}</React.Fragment> : null;
}

export default EducationSection;
