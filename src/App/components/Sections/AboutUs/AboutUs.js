import React from 'react';

//images
import headerLine from './assets/header-line-white.svg';
import exciteBuildingImg from './assets/building.jpg'

const AboutUs = () => {
	return (
		<div id="aboutus-div" className="container-fluid bg-dark">
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-10 offset-lg-1">
		        <img className="header-line" src={headerLine} alt="linebreak" />
		        <h2 className="text-center headline-4 mt-5 mb-5">Overview</h2>
		        <p className="pb-5 mb-5 pr-2">
		         <img src={exciteBuildingImg} alt="Riverside Excite building." />
		          <strong>Inland Empire Software Development</strong> (IESD) is an independent community organization dedicated to bringing community members together to network, educate and share knowledge – all with the goal of increasing the technology presence in the Inland Empire. IESD is spearheaded by an organizing group that is passionate about increasing technology awareness by increasing industry professional involvement with the community, exposing developers to new technologies and creating partnerships with community entities that benefit the community.
		        </p>
		      </div>
		    </div>
		  </div>
		</div>
	);
};

export default AboutUs;