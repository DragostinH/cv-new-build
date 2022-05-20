import React from 'react';
import './styles/App.scss';
import ContactAndName from './components/ContactAndName';
import CurrentProjects from './components/CurrentProjects';
import Experience from './components/Experience';
import Summary from './components/Summary';
import Skills from './components/Skills';
import EducationAndTraining from './components/EducationAndTraining';
import Accomplishments from './components/Accomplishments';

export default function App() {



  return (
    <section className="App">
      <ContactAndName />
      <CurrentProjects />
      <Summary />
      <Skills />
      <Experience />
      <EducationAndTraining />
      <Accomplishments />
    </section>
  );
}

