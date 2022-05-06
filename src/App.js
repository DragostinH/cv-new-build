import React, { Component } from 'react';
import './styles/App.scss';
import ContactAndName from './components/ContactAndName';
import CurrentProjects from './components/CurrentProjects';
import Experience from './components/Experience';
import Summary from './components/Summary';
import Skills from './components/Skills';
import EducationAndTraining from './components/EducationAndTraining';
import Accomplishments from './components/Accomplishments';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contactInfo: {
        input: false,
        firstName: "Drago",
        lastName: "Hristov",
        email: "dragostin.hristov@gmail.com",
        tel: "+44(0)7565335040",
        country: "Bulgaria",
        city: "Sofia",
        postCode: "1330"
      },
      currentProjects: {
        projects: []
      },
      summary: {},
      skills: {},
      experience: {},
      education: {},
      accomplishments: {}
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState(st => {
      return st.contactInfo.input = false;
    })
  }

  handleChange = (e) => {
    this.setState(st => {
      return st.contactInfo[`${e.target.name}`] = e.target.value
    })
  }

  handleOnClick = () => {
    if (this.state.contactInfo.input) {
      this.setState(st => {
        return st.contactInfo.input = false;
      })
    } else {
      this.setState(st => {
        return st.contactInfo.input = true;
      })
    }
  }

  render() {
    const { input, firstName, lastName, email, tel, country, city, postCode } = this.state.contactInfo
    return (
      <div className="App">
        <ContactAndName
          input={input}
          firstName={firstName}
          lastName={lastName}
          email={email}
          tel={tel}
          country={country}
          city={city}
          postCode={postCode}
          handleOnClick={this.handleOnClick}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <CurrentProjects />
        <Summary />
        <Skills />
        <Experience />
        <EducationAndTraining />
        <Accomplishments />
      </div>
    );
  }

}

export default App;
