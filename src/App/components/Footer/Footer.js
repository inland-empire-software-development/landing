import React from 'react';

//images
import gitHubLogo from './assets/Github.png';
import facebookLogo from './assets/Facebook.png';
import slackLogo from './assets/Slack.png';

const Footer = () => {
	return (
		<footer className="bg-black">
		  <div className="footer">
		    <p>
		      © Inland Empire Software Development 2019<br/>Code of Conduct | Terms of Service
		    </p>
		    <div className="footer-icons">
		      <p>CONNECT WITH US</p>
		      <div>
		        <a className="mx-1" href="https://github.com/inland-empire-software-development">
		          <img src={gitHubLogo} />
		        </a>
		        <a className="mx-1" href="https://www.facebook.com/groups/IESoftwareDevelopment/">
		          <img src={facebookLogo} />
		        </a>
		        <a className="mx-1" href="https://ie-sd.slack.com/">
		          <img src={slackLogo} />
		        </a>
		      </div>
		    </div>
		  </div>
		</footer>
	);
};

export default Footer;