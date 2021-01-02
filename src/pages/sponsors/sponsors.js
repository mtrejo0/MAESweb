import React from 'react';
import './sponsors.css';
import SponsorGrid from "../../components/sponsorGrid";

function Sponsors() {

  return (
      <div>
          <div className={'sponsors'}>
              <h1>Sponsors</h1>
          </div>
          <div className={'sponsorGrid'}>
              <SponsorGrid/>
          </div>
      </div>
  );
}

export default Sponsors;
