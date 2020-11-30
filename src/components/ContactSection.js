import React from "react";

function ContactSection(props) {
  const contactArea = props.contactArray.map((info, i) => (
    <div
      data-index={i}
      key={i}
      data-nav="contact"
      className="contact-section-cv"
    >
      <h3>{info.firstNameLastName}</h3>
      <p>{info.phone}</p>
      <p>{info.email}</p>
      <button
        type="button"
        className="submit-add cs"
        onClick={props.editSection}
      >
        Edit
      </button>
    </div>
  ));
  return <React.Fragment>{contactArea}</React.Fragment>;
}

export default ContactSection;
