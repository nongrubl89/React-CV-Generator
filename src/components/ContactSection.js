import React from "react";

function ContactSection(props) {
  const contactArea = Object.keys(props).map((keyName, i) => (
    <p key={i}>{props[keyName]}</p>
  ));
  return <div>{contactArea}</div>;
}

export default ContactSection;
