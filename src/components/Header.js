import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super();
  }

  headerStyle = {
    top: "0",
    right: "0",
    position: "fixed",
    height: "4%",
    background: "#34b7eb",
    display: "grid",
    padding: "8px",
    width: "100%",
    justifyContent: "right",
    zIndex: "9999",
    marginTop: "0px",
    backgroundColor: "#6199f2",
  };

  render() {
    return <h3 style={this.headerStyle}>CV Generator App</h3>;
  }
}

export default Header;
