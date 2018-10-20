import React, { Component } from 'react';

class About extends Component {
  render() {
    const { lead, skills } = this.props.resumeData
    const { pls, tools, data } = skills
    return (
      <section id="about">
        <div className="row section-intro">
          <div className="col-twelve">
            <h5>About</h5>
            <h1>Let me introduce myself</h1>
            <div className="intro-info">
              <img src="https://media.licdn.com/dms/image/C4D03AQG6AVbvkBfLTQ/profile-displayphoto-shrink_200_200/0?e=1545264000&v=beta&t=fwmkh2_WHgXF2VKx_p10mASY0Q_XXwWaL_m9s_ocZUQ" alt="Profile" />
              <p className="lead">{lead}</p>
            </div>
          </div>
        </div>
        <div className="row about-content">
          <div className="col-twelve">
            <h3>Skills</h3>
            <h4>Programming Languages</h4>
            <ul className="skills" max-width="768px">
    				   {pls.map((pl, i)=> <li key={i}><strong>{pl}</strong></li>)}
    				</ul>
            <h4>Tools</h4>
            <ul className="skills" max-width="768px">
    				   {tools.map((tool, i)=> <li key={i}><strong>{tool}</strong></li>)}
    				</ul>
            <h4>Data</h4>
            <ul className="skills" max-width="768px">
    				   {data.map((d, i)=> <li key={i}><strong>{d}</strong></li>)}
    				</ul>
          </div>
        </div>
        {/*<div className="row button-section">
          <div className="col-twelve">
            <p><a href="#contact" className="button stroke smoothscroll">Hire Me</a></p>
          </div>
        </div>*/}
      </section>
    );
  }
};

export default About;
