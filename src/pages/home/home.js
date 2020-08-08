import React from 'react';
import './home.css';
import {Button} from "react-bootstrap";

function Home() {

  return (
      <div className={'home'}>
          <img className={'logo'} alt={"MAES Logo"} src={'https://mymaes.org/wp-content/uploads/2017/04/maes-logo-2012-with-tagline.jpg'}/>
          <h1 className={'header'}>Welcome to the MIT Chapter of MAES!</h1>
          <p>MAES at MIT is a tight-knit community that focuses on the professional development of its individual members, offering them resources and opportunities for success.</p>
          <p>Becoming a member is simple: Join us every other Friday in the Latino Cultural Center at 5:45pm. Check out our Facebook Page for the details.</p>
          <div>
              <Button variant="success" href={'/aboutUs'}>About Us</Button>{'  '}
<<<<<<< HEAD
              <Button variant="primary" href = {"https://www.facebook.com/MITMaes/"}>Facebook Page</Button>
=======
              <Button variant="primary" href='https://www.facebook.com/maes.national/' target="_blank">Facebook Page</Button>
>>>>>>> 2a4b6c080186b0658ece2ddfb2c85985d7a7dab1
          </div>
          <h1 className={'header'}>Professional Development </h1>
          <p>MIT MAES is able to foster the professional development of its members through:</p>
              <ul>
                  <li>Resume workshops</li>
                  <li>Exposure to companies through a resume book</li>
                  <li>Intimate networking opportunities</li>
              </ul>
          <p>If you are a company that is interested in developing a relationship with the MIT Chapter of MAES, please email us at <strong>maes-request@mit.edu</strong></p>
          <Button variant="success" href = {"mailto: maes-request@mit.edu"}>Email Us!</Button>

          <h1 className={'header'}>Community Outreach</h1>
          <p>MIT MAES strives to have a strong impact in the community through:</p>
          <ul>
              <li>Science Extravaganza</li>
              <li>Weekly STEM Workshops</li>
              <li>Volunteering at Local Schools</li>
          </ul>
          <p>We are constantly looking for new ways to expand our community outreach. If you have any suggestions on how to do so or if you would like to partner with us please email <strong>maes-request@mit.edu</strong></p>
          <Button variant="success" href = {"mailto: maes-request@mit.edu"}>Email Us!</Button>
      </div>
  );
}

export default Home;
