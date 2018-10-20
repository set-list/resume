import React, { Component } from 'react';


class Contact extends Component {
  render() {
    const {email} = this.props.resumeData;
    return (

      <section id="contact">
        <div className="row section-intro">
          <div className="col-twelve">
            <h5>Contact</h5>
            <h1>I'd Love To Hear From You</h1>
            <p className="lead"></p>
          </div>
        </div>
      {/*  <div className="row contact-form">
          <div className="col-twelve">

            <form name="contactForm" id="contactForm" method="post" action="sendEmail.php">
              <fieldset>
                <div className="form-field">
                  <input name="contactName" type="text" id="contactName" placeholder="name" defaultValue="" minLength={2} required />
                </div>
                <div className="form-field">
                  <input name="contactEmail" type="email" id="contactEmail" placeholder="email" defaultValue="" required />
                </div>
                <div className="form-field">
                  <input name="contactSubject" type="text" id="contactSubject" placeholder="subject" defaultValue="" />
                </div>
                <div className="form-field">
                  <textarea name="contactMessage" id="contactMessage" placeholder="message" rows={10} cols={50} required defaultValue={""} />
                </div>
                <div className="form-field">
                  <button className="submitform" input type="submit">Submit</button>
                  <div id="submit-loader">
                    <div className="text-loader">Sending...</div>
                    <div className="s-loader">
                      <div className="bounce1" />
                      <div className="bounce2" />
                      <div className="bounce3" />
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>

            <div id="message-warning">
            </div>

            <div id="message-success">
              <i className="fa fa-check" />Your message was sent, thank you!<br />
            </div>
          </div>
        </div>*/}
        <div className="row contact-info">
          {/*<div className="col-four tab-full">
            <div className="icon">
              <i className="icon-pin" />
            </div>
            <h5>Where to find me</h5>
            <p>
              1600 Amphitheatre Parkway<br />
              Mountain View, CA<br />
              94043 US
            </p>
          </div>*/}
        {/*  <div className="col-four tab-full collapse"> */}
          <div className="col-twelve">
            <div className="icon">
              <i className="icon-mail" />
            </div>
            <h5>Email Me At</h5>
            <p>{email}
            </p>
          </div>
          {/*<div className="col-four tab-full">
            <div className="icon">
              <i className="icon-phone" />
            </div>
            <h5>Call Me At</h5>
            <p>Phone: (+1) 646 535 3882
            </p>
          </div>*/}
        </div>
      </section>
    );
  }
};

export default Contact;
