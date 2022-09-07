import React, { FC } from "react";
import { IGame } from "../../types/IGame";
import GameCover from "../gameCover/GameCover";
import cl from "./swiperGame.module.scss";

interface SwiperGameProps {
	game: IGame;
}

const SwiperGame: FC<SwiperGameProps> = ({ game }) => {
	return (
		<div className={cl.swiperGame}>
			<img src={game.thumbnail} alt="game" />
			<h3 className={cl.siperGame__title}>{game.title}</h3>
		</div>
	);
};

export default SwiperGame;
