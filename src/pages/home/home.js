import React from 'react';
import './home.css';
import {Button} from "react-bootstrap";
import logo from '../../assets/MAES Logo.png'

function Home() {

  return (
      <div className={'home'}>
          <img className={'logo'} alt={"MAES Logo"} src={logo}/>
          <h1 className={'header'}>Welcome to the MIT Chapter of MAES!</h1>
          <h5>MAES at MIT is a tight-knit community that focuses on the professional development of its individual members, offering them resources and opportunities for success.</h5>
          <h5>Becoming a member is simple: Join us every other Friday in the Latino Cultural Center at 5:45pm. Check out our Facebook Page for the details.</h5>
          <div className={'button'}>
              <Button variant="success" href={'#aboutUs'}>About Us</Button>{'  '}
              <Button variant="primary" href='https://www.facebook.com/maes.national/' target="_blank">Facebook Page</Button>
          </div>
          <h1 className={'header'}>Professional Development </h1>
          <h5>MIT MAES is able to foster the professional development of its members through:</h5>

                  <p className={'bold'}>Resume workshops</p>
                  <p className={'bold'}>Exposure to companies through a resume book</p>
                  <p className={'bold'}>Intimate networking opportunities</p>

          <h5>If you are a company that is interested in developing a relationship with the MIT Chapter of MAES, please email us at <strong>maes-request@mit.edu</strong></h5>
          <div className={'button'}>
            <Button variant="success" href = {"mailto: maes-request@mit.edu"}>Email Us!</Button>
          </div>
          <h1 className={'header'}>Community Outreach</h1>
          <h5>MIT MAES strives to have a strong impact in the community through:</h5>

              <p className={'bold'}>Science Extravaganza</p>
              <p className={'bold'}>Weekly STEM Workshops</p>
              <p className={'bold'}>Volunteering at Local Schools</p>

          <h5>We are constantly looking for new ways to expand our community outreach. If you have any suggestions on how to do so or if you would like to partner with us please email <strong>maes-request@mit.edu</strong></h5>
          <div className={'button'}>
            <Button variant="success" href = {"mailto: maes-request@mit.edu"}>Email Us!</Button>
          </div>
      </div>
  );
}

export default Home;
