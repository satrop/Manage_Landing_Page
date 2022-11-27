import React from 'react';
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Data from '../dataSliders/data.json';
import 'swiper/css';
import 'swiper/css/pagination';
import './slider.scss';

const Slider = () => {
	return (
		<section className="swiper-container">
			<h2>What they've said</h2>
			<Swiper
				modules={[Pagination, A11y]}
				spaceBetween={50}
				slidesPerView={1}
				pagination={{ clickable: true }}
				autoHeight={true}
				breakpoints={{
					600: {
						slidesPerView: 2,
					},
					1140: {
						spaceBetween: 50,
						slidesPerView: 3,
					},
				}}
			>
				{Data.map((post) => {
					return (
						<SwiperSlide id={post.id} key={post.id}>
							<img
								className="swiper-slide__profile-pic"
								src={post.profilePic}
								alt={post.name}
							/>
							<h3 className="swiper-slide__name">{post.name}</h3>
							<p className="swiper-slide__extract">
								{post.extract}
							</p>
						</SwiperSlide>
					);
				})}
			</Swiper>
			<div className="flex">
				<a href="#nogo" className="button">
					Get Started
				</a>
			</div>
		</section>
	);
};

export default Slider;
