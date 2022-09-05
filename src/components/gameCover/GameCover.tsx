import React, { FC } from "react";
import cl from "./gameCover.module.scss";

interface GameCoverProps {
	image: string;
	style?: any;
}

const GameCover: FC<GameCoverProps> = ({ image, style }) => {
	return (
		<div
			className={cl.gameCover}
			style={{ backgroundImage: `url(${image})`, ...style }}
		/>
	);
};

export default GameCover;
