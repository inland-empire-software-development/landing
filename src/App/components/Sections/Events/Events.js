import React from 'react';

//images
import headerLine from './assets/header-line-black.svg';

const Events = () => {
	return (
<div id="events-div" className="container pb-5">
  <div className="row">
    <div className="col-lg-12">
      <img className="header-line" src={headerLine} alt="linebreak" />
      <h2 className="text-center headline-4 mt-5 text-black">Events</h2>
    </div>
  </div>

  <div className="row">
    <div className="col-lg-4 mb-5 mt-5">
      <p className="headline-2 text-black text-left">03/28/2019 - JavaScript Basics</p>
      <p className="text-black text-left">
        <time><strong>Time:</strong></time> 5:00 PM - 7:00 PM<br/>
        <strong> Location:</strong> 3499 Tenth st.
        Riverside, CA. 92501
      </p>
    </div>

    <div className="col-lg-4 mb-5 mt-5">
      <p className="headline-2 text-black text-left">03/23/2019 - GitHub User Interface</p>
      <p className="text-black text-left">
        <time><strong>Time:</strong></time> 3:00 PM - 5:00 PM<br/>
        <strong> Location:</strong> 3499 Tenth st.
        Riverside, CA. 92501
      </p>
    </div>

    <div className="col-lg-4 mb-5 mt-5">
      <p className="headline-2 text-black text-left">03/21/2019 - Domains, Hosting & Access</p>
      <p className="text-black text-left">
        <time><strong>Time:</strong></time> 5:00 PM - 7:00 PM<br/>
        <strong> Location:</strong> 3499 Tenth st.
        Riverside, CA. 92501
      </p>
    </div>

    <div className="col-lg-4 mb-5 mt-5">
      <p className="headline-2 text-black text-left">03/16/2019 - Networking</p>
      <p className="text-black text-left">
        <time><strong>Time:</strong></time> 3:00 PM - 5:00 PM<br/>
        <strong> Location:</strong> 3499 Tenth st.
        Riverside, CA. 92501
      </p>
    </div>

    <div className="col-lg-4 mb-5 mt-5">
      <p className="headline-2 text-black text-left">03/14/2019 - Clone vs Fork | Google FireBase </p>
      <p className="text-black text-left">
        <time><strong>Time:</strong></time> 5:00 PM - 7:00 PM<br/>
        <strong> Location:</strong> 3499 Tenth st.
        Riverside, CA. 92501
      </p>
    </div>

    <div className="col-lg-4 mb-5 mt-5">
      <p className="headline-2 text-black text-left">03/9/2019 - Open Work Session</p>
      <p className="text-black text-left">
        <time><strong>Time:</strong></time> 3:00 PM - 5:00 PM<br/>
        <strong> Location:</strong> 3499 Tenth st.
        Riverside, CA. 92501
      </p>
    </div>

  </div>
</div>
	);
};

export default Events;