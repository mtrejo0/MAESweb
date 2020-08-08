import React from 'react';
import './aboutUs.css';
import ExecBoard from "../../components/execBoard";

function AboutUs() {

  return (
      <div className={'aboutUs'}>
          <h1>MAES at MIT</h1>
          <h2><i>Many Cultures, One Familia</i></h2>
          <div className={'spacing'}></div>
          <p>MIT MAES is a tight-knit community that focuses on the professional development of its individual members, offering them resources and opportunities for success, and that has an important role in STEM outreach to the Boston and greater Boston community. MAES is also known as the Society of Latinos in Engineering and Science.</p>
          <div className={'spacing'}></div>
          <h2>Mission</h2>
          <p>To provide a networking and nurturing environment to foster members' professional development by honing their leadership communication, management, and technical skills.</p>
          <div className={'spacing'}></div>
          <h2>Vision</h2>
          <p>MAES is a prominent Latino professional development and STEM outreach organization recognized for its programming and membership.</p>

          <div className={'execBoardTitle'}>
              <h2>Exec Board</h2>
          </div>
          <div className={'execBoard'}>
              <ExecBoard />
          </div>
      </div>
  );
}

export default AboutUs;
