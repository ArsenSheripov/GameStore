import React, { FC } from "react";
import cl from "./game.module.scss";

interface GameGenreProps {
	genre: string;
}

const GameGenre: FC<GameGenreProps> = ({ genre }) => {
	return <span className={cl.genre}>{genre}</span>;
};

export default GameGenre;
