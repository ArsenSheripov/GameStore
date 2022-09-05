import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { GAMES } from "../../mock";
import GameItem from "../../components/games/GameItem";
import SwiperGame from "../../components/swiperGame/SwiperGame";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";

const HomePage = () => {
	const sliderGames = GAMES.slice(3);

	return (
		<div className={"container"}>
			<Swiper
				modules={[Navigation, Pagination, A11y]}
				spaceBetween={50}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log("slide change")}
			>
				{sliderGames.map((game) => (
					<SwiperSlide key={game.title}>
						<SwiperGame game={game} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default HomePage;
