import React from 'react';

//images
import headerLine from './assets/header-line-white.svg';
import missionImg from './assets/mission.jpg';

const Mission = () => {
	return (
    <div id="mission-div" className="container-fluid bg-darker">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <img className="header-line" src={headerLine} alt="linebreak" />
            <h2 className="text-center headline-4 mt-5">Mission</h2>
          </div>
    	  </div>

    	  <div className="row">
          <div className="col-lg-12 pb-5 mb-5 ">
            <p className="pb-5 mb-5 pr-2 pt-5">
              <img src={missionImg} alt="Introducing developers to open source projects." />
              Part of our mission is to expose the local developer community to the process of contributing to free and open source software (FOSS), regardless of their development experience. We provide our members with a friendly workspace to work, learn and connect with other developers and industry professionals. By leveraging open source software, our members can develop their skills in various technologies while rubbing elbows with working industry professionals. Industry professionals that volunteer to speak in our meetups help build stronger communities by sharing their experience in the industry and with the technology they use every day; they give back to their communities.
            </p>
          </div>
        </div>
      </div>
    </div>
	);
};

export default Mission;