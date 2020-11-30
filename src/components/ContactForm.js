import React, { Component } from "react";
class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailLabel: "Email",
      submitDisabled: false,
    };
  }

  validateEmail(e) {
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const emailAdress = e.target.value;
    if (!emailAdress.match(mailformat)) {
      this.setState({
        emailLabel: "Please enter a valid email address",
        submitDisabled: true,
      });
    } else if (emailAdress.match(mailformat)) {
      this.setState({
        emailLabel: "Email",
        submitDisabled: false,
      });
    }
  }

  validatePhone() {
    let phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let formattedPhoneNumber = this.state.phoneNumber.replace(
      phoneRegex,
      "($1) $2-$3"
    );
    this.setState({ phoneNumber: formattedPhoneNumber });
  }

  showMore() {}
  render() {
    return (
      <div className="wrapper-contact">
        <form className={this.props.contactClass}>
          <label id="first-name">First and Last Name:</label>
          <textarea
            // placeholder="First Name"
            // style={{ fontFamily: "Lato" }}
            name="firstNameLastName"
            data-nav="contact"
            value={this.props.firstName}
            onChange={this.props.handleChange}
          />
          {/* <label id="last-name">Last Name:</label>
          <textarea
            name="lastName"
            data-nav="contact"
            value={this.props.lastName}
            onChange={this.props.handleChange}
          /> */}
          <label id="phone">Phone Number:</label>
          <textarea
            name="phone"
            data-nav="contact"
            value={this.props.phone}
            onChange={this.props.handleChange}
            onBlur={this.props.validatePhone}
          />
          <label id="email">{this.state.emailLabel}:</label>
          <textarea
            name="email"
            data-nav="contact"
            value={this.props.email}
            onChange={this.props.handleChange}
            onBlur={this.validateEmail.bind(this)}
          />
          <button
            id="submit"
            disabled={this.state.submitDisabled}
            className="submit-add submit-contact"
            type="button"
            value="Submit"
            data-target="contact"
            onClick={this.props.handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
