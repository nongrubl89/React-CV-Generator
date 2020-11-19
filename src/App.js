import React, { Component } from "react";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import ContactSection from "./components/ContactSection";
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
      workInfo: false,
      eduArray: [],
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
        endDate: new Date(),
        eduBeginDate: new Date(),
      },
      employment: {
        employer: "",
        title: "",
        duties: "",
        beginDate: new Date(),
        endDate: new Date(),
      },
    };
  }

  getDefaultObject = (obj) => {
    const defaultValues = {
      string: "",
      boolean: false,
    };

    return Object.keys(obj).reduce((acc, rec, index) => {
      return { ...acc, [rec]: defaultValues[typeof obj[rec]] };
    }, {});
  };

  eduBeginDateChange = (date, name) => {
    this.setState(
      (prevState) => ({
        education: { ...prevState.education, eduBeginDate: date },
      }),
      () => console.log(this.state)
    );
  };

  eduEndDateChange = (date) => {
    this.setState(
      (prevState) => ({
        education: { ...prevState.education, endDate: date },
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
    let contact = { ...this.state.contact };
    contact.complete = true;
    this.setState({ contact, contactInfo: false }, () =>
      console.log(this.state)
    );
  };

  handleEduSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    e.target.id === "submitEdu"
      ? this.setState({ educationInfo: false })
      : this.setState({ educationInfo: true });
    this.setState(
      {
        eduArray: this.state.eduArray.concat(this.state.education),
        education: this.getDefaultObject(this.state.education),
      },
      () => console.log(this.state)
    );
  };

  handleWorkSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    e.target.id === "submitWork"
      ? this.setState({ educationInfo: false })
      : this.setState({ educationInfo: true });
    this.setState(
      {
        eduArray: this.state.eduArray.concat(this.state.education),
        education: this.getDefaultObject(this.state.education),
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
            handleSubmit={this.handleEduSubmit}
            institution={this.state.education.institution}
            typeOfEd={this.state.education.typeOfEd}
            fieldOfStudy={this.state.education.fieldOfStudy}
            // addInstitution={this.addInstitution}
            educationClass={this.state.educationClass}
            calendar={
              <>
                <DatePicker
                  selected={this.state.education.eduBeginDate}
                  onChange={this.eduBeginDateChange}
                  dateFormat="MM/yyyy"
                  showMonthYearPicker
                  name="eduBeginDate"
                />
                <DatePicker
                  selected={this.state.education.endDate}
                  onChange={this.eduEndDateChange}
                  dateFormat="MM/yyyy"
                  showMonthYearPicker
                  name="eduEndDate"
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
            handleSubmit={this.handleWorkSubmit}
            institution={this.state.employment.employer}
            typeOfEd={this.state.employment.title}
            fieldOfStudy={this.state.employment.duties}
            // addEmployment={this.state.addEmployment}
            employmentClass={this.state.employmentClass}
            calendar={
              <>
                <DatePicker
                  data-date="beginDate"
                  selected={this.state.education.beginDate}
                  onChange={this.eduBeginDateChange}
                  dateFormat="MM/yyyy"
                  showMonthYearPicker
                />
                <DatePicker
                  data-date="endDate"
                  selected={this.state.education.endDate}
                  onChange={this.eduEndDateChange}
                  dateFormat="MM/yyyy"
                  showMonthYearPicker
                />
              </>
            }
          />
        </SectionHeader>
        <GeneratedCV>
          {this.state.contact.complete ? (
            <ContactSection {...this.state.contact} />
          ) : null}
        </GeneratedCV>
      </div>
    );
  }
}

export default App;
