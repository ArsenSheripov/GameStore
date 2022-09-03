import React, { FC } from "react";
import cl from "./gameCover.module.scss";

interface GameCoverProps {
	image: string;
}

const GameCover: FC<GameCoverProps> = ({ image }) => {
	return (
		<div
			className={cl.gameCover}
			style={{ backgroundImage: `url(${image})` }}
		/>
	);
};

export default GameCover;
