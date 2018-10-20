import React, { Component } from 'react';

class Intro extends Component {
  render() {
    const { name, role, linkedin, instagram } = this.props.resumeData;
    return (
      <section id="intro">
        <div className="intro-overlay" />
        <div className="intro-content">
          <div className="row">
            <div className="col-twelve">
              <h5>Hello, World</h5>
              <h1>I'm {name}</h1>
              <p className="intro-position">
                <span>{role}</span>
              </p>
              {/*<ul><li>
                <a className="smoothscroll button stroke" href="#about">More About Me</a>
              </li></ul>*/}
            </div>
          </div>
        </div>
        <ul className="intro-social">
          <li><a href={linkedin}><i className="fa fa-linkedin" /></a></li>
          {/*<li><a href="#"><i className="fa fa-behance" /></a></li>
          <li><a href="#"><i className="fa fa-twitter" /></a></li>
          <li><a href="#"><i className="fa fa-dribbble" /></a></li>*/}
          <li><a href={instagram}><i className="fa fa-instagram" /></a></li>
        </ul>
      </section>
    );
  }
};

export default Intro;
