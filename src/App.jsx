import React from 'react';
import Nav from './components/navigation/Nav';
import Hero from './components/hero/Hero';
import Info from './components/info/Info';
import Slider from './components/slider/Slider';
import FooterEyebrow from './components/footerEyebrow/FooterEyebrow';
import Footer from './components/footer/Footer';

const App = () => {
	return (
		<>
			<div className="flex">
				<a href="#main" className="skip-nav button">
					Skip navigation
				</a>
			</div>
			<div className="pill pill--lg" role="presentation"></div>
			<div className="pill pill--sm" role="presentation"></div>
			<Nav />
			<main id="main">
				<Hero />
				<Info />
				<Slider />
				<FooterEyebrow />
				<Footer />
			</main>
		</>
	);
};

export default App;
