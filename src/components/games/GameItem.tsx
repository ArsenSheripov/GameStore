import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { IGame } from "../../types/IGame";
import AppButton from "../UI/button/AppButton";
import cl from "./game.module.scss";
import GameBuy from "./GameBuy";

interface GameItemProps {
	game: IGame;
}

const GameItem: FC<GameItemProps> = ({ game }) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleGameNavigate = () => {
		navigate(`/games/${game.id}`);
	};
	return (
		<div className={cl.games__item} onClick={handleGameNavigate}>
			<img className={cl.games__img} src={game.thumbnail} alt="" />
			<h1 className={cl.games__name}>{game.title}</h1>
			<p className={cl.games__description}>{game.short_description}</p>
			<GameBuy game={game} />
		</div>
	);
};

export default GameItem;
