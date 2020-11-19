import React, { Component } from "react";

class EducationForm extends Component {
  render() {
    return (
      <div>
        <form className={this.props.educationClass}>
          <label>
            Institution Name:
            <textarea
              name="institution"
              data-nav="education"
              value={this.props.institution}
              onChange={this.props.handleChange}
            />
          </label>
          <label>
            Type of Institution:
            <select
              name="typeOfEd"
              data-nav="education"
              value={this.props.typeOfEd}
              onChange={this.props.handleChange}
            >
              <option value="base">--</option>
              <option value="undergraduate">Undergraduate</option>
              <option value="graduate">Graduate</option>
              <option value="post-graduate">Post Graduate</option>
              <option selected value="other">
                Other
              </option>
            </select>
          </label>
          <label>
            Field of Study:
            <textarea
              name="fieldOfStudy"
              data-nav="education"
              value={this.props.fieldOfStudy}
              onChange={this.props.handleChange}
            />
            Years Attended:
            <div data-date="beginDate">{this.props.calendar}</div>
          </label>
          <p>Done with education history?</p>
          <button
            type="button"
            id="submitEdu"
            onClick={this.props.handleSubmit}
          >
            Submit
          </button>
          <p>Submit and add another institution</p>
          <button type="button" id="addEdu" onClick={this.props.handleSubmit}>
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default EducationForm;
