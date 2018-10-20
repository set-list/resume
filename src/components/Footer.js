import React, { Component } from 'react';

class Footer extends Component{
  render() {
    const { linkedin, instagram } = this.props.resumeData;
    return (
      <div>
        <footer>
          <div className="row">
            <div className="col-six tab-full pull-right social">
              <ul className="footer-social">
                <li><a href={linkedin}><i className="fa fa-linkedin" /></a></li>
                <li><a href={instagram}><i className="fa fa-instagram" /></a></li>
              </ul>
            </div>
            <div id="go-top">
              <a className="smoothscroll" title="Back to Top" href="#intro"><i className="fa fa-long-arrow-up" /></a>
            </div>
          </div>
        </footer>
        <div id="preloader">
          <div id="loader" />
        </div>
      </div>
    );
  }
};

export default Footer;
