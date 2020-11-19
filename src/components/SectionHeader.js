import React from "react";

function SectionHeader(props) {
  return (
    <div className={props.class}>
      <button
        id="header-button"
        style={{ marginTop: "50px" }}
        onClick={props.onHeaderClick}
        data-buttonname={props.data}
      >
        {props.name}
      </button>
      {props.children}
    </div>
  );
}

export default SectionHeader;
