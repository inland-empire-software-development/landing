import React, { Component } from 'react';
import WebFont from 'webfontloader';

//components
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

//sections
import Header from './components/Sections/Header/Header';
import AboutUs from './components/Sections/AboutUs/AboutUs';
import Mission from './components/Sections/Mission/Mission';
import Events from './components/Sections/Events/Events';

//sections

class App extends Component{
	componentDidMount(){
		WebFont.load({
	    google: {
	      families: ['Lato', 'Open Sans']
	    }
		});
	}

	render(){
		return(
			<div className="App">
				<Nav />

				{/* sections */}
				<Header />
				<AboutUs />
				<Mission />
				<Events />

				<Footer />
			</div>
		);
	};
};

export default App;