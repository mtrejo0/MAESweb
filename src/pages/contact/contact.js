import React from 'react';
import './contact.css';
import Button from "react-bootstrap/Button";

function Contact() {

  return (
      <div className={'contact'}>
          <h1>Contact Us!</h1>
          <p>MAES welcomes any opportunity that can help further the careers of our engineers. If you are a company/organization that has infromation our members can benefit from please feel free to reach out! </p>
          <p>84 Massachusetts Ave Cambridge, MA 02139</p>
          <div>
              <Button variant="success" href = {"mailto: maes-request@mit.edu"}>Email</Button>{'  '}
              <Button variant="primary" href = {"https://www.facebook.com/MITMaes/"}>Facebook Page</Button>
          </div>
      </div>
  );
}

export default Contact;
