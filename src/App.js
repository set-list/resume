import React, { Component } from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import resumeData from './resumeData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Intro resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Contact resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;
