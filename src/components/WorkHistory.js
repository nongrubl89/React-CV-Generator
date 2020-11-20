import React, { Component } from "react";

class WorkHistory extends Component {
  render() {
    return (
      <div className="wrapper-employment">
        <form className={this.props.employmentClass}>
          <label>Employer:</label>
          <textarea
            name="employer"
            data-nav="employment"
            value={this.props.employer}
            onChange={this.props.handleChange}
          />
          <label>Job Title:</label>
          <textarea
            name="title"
            data-nav="employment"
            value={this.props.title}
            onChange={this.props.handleChange}
          />
          <label>Summary of duties:</label>
          <textarea
            id="duties"
            name="duties"
            data-nav="employment"
            value={this.props.duties}
            onChange={this.props.handleChange}
          />

          <label>Dates of Employment:</label>
          <div class="datepicker">{this.props.calendar}</div>
          <label>Done with work history?</label>
          <button
            type="button"
            id="submit"
            className="submit-add"
            data-target="employment"
            onClick={this.props.handleSubmit}
          >
            Submit
          </button>
          <label>Submit and add another job</label>
          <button
            type="button"
            id="addWork"
            className="submit-add"
            data-target="employment"
            onClick={this.props.handleSubmit}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default WorkHistory;
