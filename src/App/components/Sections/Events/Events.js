import React from "react";

//images
import headerLine from "./assets/header-line-black.svg";

const Events = () => {
	return (
    <div className="container pb-5" id="events-div">
        <div className="row">
            <div className="col-lg-12">
                <img className="header-line" src={headerLine} alt="linebreak" />
                <h2 className="text-center headline-4 mt-5 text-black">Events</h2>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-4 mb-5 mt-5">
                <p className="headline-2 text-black text-left">04/04/2019 - JavaScript Basics</p>
                <p className="text-black text-left">
                    <time><strong>Time:</strong></time> 5:00 PM - 7:00 PM<br />
                    <strong> Location:</strong> 3499 Tenth st.
                    Riverside, CA. 92501
                </p>
            </div>

            <div className="col-lg-4 mb-5 mt-5">
                <p className="headline-2 text-black text-left">04/06/2019 - Advanced JavaScript</p>
                <p className="text-black text-left">
                    <time><strong>Time:</strong></time> 3:00 PM - 5:00 PM<br />
                    <strong> Location:</strong> 3499 Tenth st.
                    Riverside, CA. 92501
                </p>
            </div>

            <div className="col-lg-4 mb-5 mt-5">
                <p className="headline-2 text-black text-left">04/11/2019 - AWS Summit Anaheim</p>
                <p className="text-black text-left">
                    <time><strong>Time:</strong></time> 7:00 AM<br />
                    <strong> Location:</strong> Anaheim Convention Center
                </p>
                {/* Remove <a> after event!! */}
                <a href="https://aws.amazon.com/events/summits/anaheim/"
                    style={{color: "black", fontSize: "12px"}}>https://aws.amazon.com/events/summits/anaheim/</a>
            </div>

            <div className="col-lg-4 mb-5 mt-5">
                <p className="headline-2 text-black text-left">04/13/2019 - To Be Determined</p>
                <p className="text-black text-left">
                    <time><strong>Time:</strong></time> 3:00 PM - 5:00 PM<br />
                    <strong> Location:</strong> 3499 Tenth st.
                    Riverside, CA. 92501
                </p>
            </div>

            <div className="col-lg-4 mb-5 mt-5">
                <p className="headline-2 text-black text-left">04/18/2019 - To Be Determined </p>
                <p className="text-black text-left">
                    <time><strong>Time:</strong></time> 5:00 PM - 7:00 PM<br />
                    <strong> Location:</strong> 3499 Tenth st.
                    Riverside, CA. 92501
                </p>
            </div>

            <div className="col-lg-4 mb-5 mt-5">
                <p className="headline-2 text-black text-left">04/20/2019 - To Be Determined</p>
                <p className="text-black text-left">
                    <time><strong>Time:</strong></time> 3:00 PM - 5:00 PM<br />
                    <strong> Location:</strong> 3499 Tenth st.
                    Riverside, CA. 92501
                </p>
            </div>
        </div>
    </div>
	);
};

export default Events;