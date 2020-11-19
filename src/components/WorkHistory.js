import React, { Component } from "react";

class WorkHistory extends Component {
  render() {
    return (
      <div>
        <form className={this.props.employmentClass}>
          <label>
            Employer:
            <textarea
              name="employer"
              data-nav="employment"
              value={this.props.employer}
              onChange={this.props.handleChange}
            />
          </label>
          <label>
            Job Title:
            <textarea
              name="title"
              data-nav="employment"
              value={this.props.title}
              onChange={this.props.handleChange}
            />
          </label>
          <label>
            Summary of duties:
            <textarea
              name="duties"
              data-nav="employment"
              value={this.props.duties}
              onChange={this.props.handleChange}
            />
            Dates of Employment:
            {this.props.calendar}
          </label>
          <p>Done with work history?</p>
          <button
            type="button"
            id="submitWork"
            onClick={this.props.handleSubmit}
          >
            Submit
          </button>
          <p>Submit and add another job</p>
          <button
            type="button"
            id="submitWork"
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
