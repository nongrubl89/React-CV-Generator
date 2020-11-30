import React, { Component } from "react";

class EducationForm extends Component {
  render() {
    return (
      <div className="wrapper-education">
        <form className={this.props.educationClass}>
          <label>Institution Name:</label>
          <textarea
            name="institution"
            data-nav="education"
            value={this.props.institution}
            onChange={this.props.handleChange}
          />
          <label>Type of Institution:</label>
          <select
            name="typeOfEd"
            data-nav="education"
            value={this.props.typeOfEd}
            onChange={this.props.handleChange}
          >
            <option value="base">--</option>
            <option style={{ fontFamily: "Lato" }} value="Undergraduate">
              Undergraduate
            </option>
            <option value="Graduate">Graduate</option>
            <option value="Post-Graduate">Post Graduate</option>
            <option selected value="Certification">
              Other
            </option>
          </select>
          <label>Field of Study:</label>
          <textarea
            name="fieldOfStudy"
            data-nav="education"
            value={this.props.fieldOfStudy}
            onChange={this.props.handleChange}
          />
          <label>Years Attended:</label>
          <div class="datepicker">{this.props.calendar}</div>
          <label>Done with education history?</label>
          <button
            type="button"
            className="submit-add"
            id="submit"
            data-target="education"
            onClick={this.props.handleSubmit}
          >
            Submit
          </button>
          <label>Submit and add another institution</label>
          <button
            type="button"
            className="submit-add"
            id="addEdu"
            data-target="education"
            onClick={this.props.handleSubmit}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default EducationForm;
