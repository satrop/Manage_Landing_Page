import React from 'react';
import './hero.scss';
import heroImg from '../../assets/img/illustration-intro.svg';

const Hero = () => {
	return (
		<section>
			<div className="container container--two-columns container--hero">
				<article className="lead flow">
					<h1>Bring everyone together to build better products.</h1>
					<p>
						Manage makes it simple for software teams to plan
						day-to-day tasks while keeping the larger team goals in
						view.
					</p>
					<div className="flex">
						<a href="#nogo" className="button">
							Get Started
						</a>
					</div>
				</article>
				<article>
					<img
						src={heroImg}
						alt="Information graphs."
						className="hero-image"
					/>
				</article>
			</div>
		</section>
	);
};

export default Hero;
