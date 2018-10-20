import React, { Component } from 'react';

class Resume extends Component{
  render() {
    const { more, work, education } = this.props.resumeData;
    return (
      <section id="resume" className="grey-section">
        <div className="row section-intro">
          <div className="col-twelve">
            <h5>Resume</h5>
            <h1>My credentials</h1>
            <p className="lead">{more}</p>
          </div>
        </div>
        <div className="row resume-timeline">
          <div className="col-twelve resume-header">
            <h2>Work Experience</h2>
          </div>
          <div className="col-twelve">
            <div className="timeline-wrap">
              { work.map((job, i) => (
                  <div className="timeline-block" key={i}>
                    <div className="timeline-ico">
                      <i className="fa fa-briefcase" />
                    </div>
                    <div className="timeline-header">
                      <h3>{job.title}</h3>
                      <p>{job.time}</p>
                    </div>
                    <div className="timeline-content">
                      <h4>{job.com}</h4>
                      <p>{job.desc}</p>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row resume-timeline">
          <div className="col-twelve resume-header">
            <h2>Education</h2>
          </div>
          <div className="col-twelve">
            <div className="timeline-wrap">
              { education.map((edu, i)=> (
                <div className="timeline-block" key={i}>
                  <div className="timeline-ico">
                    <i className="fa fa-graduation-cap" />
                  </div>
                  <div className="timeline-header">
                    <h3>{edu.degree}</h3>
                    <p>{edu.time}</p>
                  </div>
                  <div className="timeline-content">
                    <h4>{edu.school}</h4>
                    <p>{edu.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default Resume;
