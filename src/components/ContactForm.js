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
    console.log(emailAdress);
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
  showMore() {}
  render() {
    return (
      <div>
        <form
          className={this.props.contactClass}
          onSubmit={this.props.handleSubmit}
        >
          <label>
            First Name:
            <textarea
              name="firstName"
              data-nav="contact"
              value={this.props.firstName}
              onChange={this.props.handleChange}
            />
          </label>
          <label>
            Last Name:
            <textarea
              name="lastName"
              data-nav="contact"
              value={this.props.lastName}
              onChange={this.props.handleChange}
            />
          </label>
          <label>
            Phone Number:
            <textarea
              name="phone"
              data-nav="contact"
              value={this.props.phone}
              onChange={this.props.handleChange}
            />
            <label>
              {this.state.emailLabel}
              <textarea
                name="email"
                data-nav="contact"
                value={this.props.email}
                onChange={this.props.handleChange}
                onBlur={this.validateEmail.bind(this)}
              />
            </label>
          </label>
          <input
            disabled={this.state.submitDisabled}
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}

export default ContactForm;
