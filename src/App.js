import React, { Component } from "react";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import ContactSection from "./components/ContactSection";
import EmploymentSection from "./components/EmploymentSection";
import EducationSection from "./components/EducationSection";
import SectionHeader from "./components/SectionHeader";
import EducationForm from "./components/EducationForm";
import WorkHistory from "./components/WorkHistory";
import GeneratedCV from "./components/GeneratedCV";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactClass: "contact",
      educationClass: "education",
      employmentClass: "employment",
      contactInfo: false,
      educationInfo: false,
      employmentInfo: false,
      educationArray: [],
      employmentArray: [],
      readyToGenerate: false,
      contact: {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        complete: false,
      },
      education: {
        institution: "",
        typeOfEd: "",
        fieldOfStudy: "",
        eduEndDate: new Date(),
        eduBeginDate: new Date(),
      },
      employment: {
        employer: "",
        title: "",
        duties: "",
        emplBeginDate: new Date(),
        emplEndDate: new Date(),
      },
    };
  }

  getDefaultObject = (obj) => {
    const defaultValues = {
      string: "",
      boolean: false,
      // Date: new Date(),
    };

    return Object.keys(obj).reduce((acc, rec, index) => {
      return { ...acc, [rec]: defaultValues[typeof obj[rec]] };
    }, {});
  };

  dateChange = (date, name, category) => {
    this.setState(
      (prevState) => ({
        [category]: { ...prevState[category], [name]: date },
      }),
      () => console.log(this.state)
    );
  };

  handleChange = (e) => {
    const value = e.target.value;
    const field = e.target.dataset.nav;
    console.log(field);
    this.setState((prevState) => ({
      [field]: {
        ...prevState[field],
        [e.target.name]: value,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ contactClass: "contact", contactInfo: true }, () =>
      console.log(this.state)
    );
  };

  handleWorkEduSubmit = (e) => {
    e.preventDefault();
    const stateObject = e.target.dataset.target; //education
    const initialClass = `${stateObject}Class`;
    const showFormClass = `${stateObject}-show`;
    const array = `${stateObject}Array`;
    const infoBoolean = `${stateObject}Info`;
    e.target.id === "submit"
      ? this.setState({ [initialClass]: stateObject })
      : this.setState({ [initialClass]: showFormClass });
    this.setState(
      {
        [array]: this.state[array].concat(this.state[stateObject]), //educationArray: this.state.educationArray.concat(this.state.education)
        [stateObject]: this.getDefaultObject(this.state[stateObject]),
        [infoBoolean]: true,
      },
      () => console.log(this.state)
    );
  };

  onHeaderClick = (e) => {
    const headerName = e.target.dataset.buttonname;
    const stateName = `${headerName}Class`;
    const stateShow = `${headerName}-show`;
    let newState;
    newState = this.state[stateName] === stateShow ? headerName : stateShow;
    this.setState({
      [stateName]: newState,
    });
  };

  generateCV = () => {
    if (
      this.state.contactInfo &&
      this.state.employmentInfo &&
      this.state.educationInfo
    ) {
      this.setState({ readyToGenerate: !this.state.readyToGenerate });
      console.log("generating CV");
    } else if (
      !this.state.contactInfo ||
      !this.state.employmentInfo ||
      !this.state.educationInfo
    ) {
      console.log("not ready to generate");
    }
  };

  render() {
    return (
      <div className="container">
        <Header />
        <SectionHeader
          class="header-contact"
          name="Contact Information"
          data="contact"
          onHeaderClick={this.onHeaderClick}
        >
          <ContactForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            firstName={this.state.contact.firstName}
            lastName={this.state.contact.lastName}
            phone={this.state.contact.phone}
            email={this.state.contact.email}
            contactClass={this.state.contactClass}
          />
        </SectionHeader>

        <SectionHeader
          class="header-education"
          name="Education History"
          data="education"
          onHeaderClick={this.onHeaderClick}
        >
          <EducationForm
            handleChange={this.handleChange}
            handleSubmit={this.handleWorkEduSubmit}
            institution={this.state.education.institution}
            typeOfEd={this.state.education.typeOfEd}
            fieldOfStudy={this.state.education.fieldOfStudy}
            educationClass={this.state.educationClass}
            calendar={
              <>
                <DatePicker
                  onChange={(date) =>
                    this.dateChange(date, "eduBeginDate", "education")
                  }
                  selected={this.state.education.eduBeginDate}
                  dateFormat="MM/yyyy"
                  showMonthYearPicker
                  name="eduBeginDate"
                  category="education"
                  className="datepicker"
                />
                <DatePicker
                  selected={this.state.education.eduEndDate}
                  onChange={(date) =>
                    this.dateChange(date, "eduEndDate", "education")
                  }
                  dateFormat="MM/yyyy"
                  showMonthYearPicker
                  name="eduEndDate"
                  category="education"
                />
              </>
            }
          ></EducationForm>
        </SectionHeader>
        <SectionHeader
          class="header-employment"
          name="Work History"
          data="employment"
          onHeaderClick={this.onHeaderClick}
        >
          <WorkHistory
            handleChange={this.handleChange}
            handleSubmit={this.handleWorkEduSubmit}
            employer={this.state.employment.employer}
            title={this.state.employment.title}
            duties={this.state.employment.duties}
            employmentClass={this.state.employmentClass}
            calendar={
              <>
                <DatePicker
                  name="emplBeginDate"
                  category="employment"
                  selected={this.state.employment.emplBeginDate}
                  onChange={(date) =>
                    this.dateChange(date, "emplBeginDate", "employment")
                  }
                  dateFormat="MM/yyyy"
                  showMonthYearPicker
                />
                <DatePicker
                  name="emplEndDate"
                  category="employment"
                  selected={this.state.employment.emplEndDate}
                  onChange={(date) =>
                    this.dateChange(date, "emplEndDate", "employment")
                  }
                  dateFormat="MM/yyyy"
                  showMonthYearPicker
                />
              </>
            }
          />
        </SectionHeader>
        <button type="button" id="generate" onClick={this.generateCV}>
          Generate My CV
        </button>
        {this.state.readyToGenerate ? (
          <GeneratedCV>
            <ContactSection {...this.state.contact} />
            <EducationSection {...this.state.educationArray} />
            <EmploymentSection {...this.state.employmentArray} />
          </GeneratedCV>
        ) : null}
      </div>
    );
  }
}

export default App;
