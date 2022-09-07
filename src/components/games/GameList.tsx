import React, { FC, useEffect, useState } from "react";
import gtaImg from "../../assets/images/volga.jpg";
import GameItem from "./GameItem";
import cl from "./game.module.scss";
import { IGame } from "../../types/IGame";
import axios from "axios";
import { API_HOST, API_KEY } from "../../consts";
import GameService from "../../API/GameService";
import { fetchGames } from "../../store/ActionCreators";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import Loader from "../UI/Loader/Loader";

const GameList: FC = () => {
	const dispatch = useAppDispatch();
	const { games, isLoading } = useAppSelector((state) => state.games);

	useEffect(() => {
		dispatch(fetchGames());
	}, []);

	if (isLoading) {
		return (
			<div className={cl.games}>
				<Loader />
			</div>
		);
	}

	return (
		<div className={cl.games}>
			{
				//@ts-ignore
				games.map((game) => (
					<GameItem key={game.title} game={game} />
				))
			}
		</div>
	);
};

export default GameList;
