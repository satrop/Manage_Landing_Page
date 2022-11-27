import React from 'react';
import './footerEyebrow.scss';

const FooterEyebrow = () => {
	return (
		<section className="background-color--orange">
			<div className="pill pill--sm" role="presentation"></div>
			<div className="pill pill--sm" role="presentation"></div>
			<div className="container container--footer-eyebrow">
				<div className="h2">Simplify how your team works today.</div>
				<a href="#nogo" className="button">
					Get Started
				</a>
			</div>
		</section>
	);
};

export default FooterEyebrow;
