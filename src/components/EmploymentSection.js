import React from "react";

function EmploymentSection(props) {
  const contactArea = Object.keys(props).map((keyName, i) => (
    <p key={i}>{props[keyName]}</p>
  ));
  return <div>Employment</div>;
}

export default EmploymentSection;
