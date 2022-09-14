import React, { FC, useEffect, useMemo, useState } from "react";
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
	const [gamesList, setGamesList] = useState<IGame[] | null>([]);
	const { games, isLoading } = useAppSelector((state) => state.games);
	const [searchQuery, setSearchQuery] = useState();

	useEffect(() => {
		dispatch(fetchGames());
	}, []);

	useEffect(() => {
		//@ts-ignore
		if (games.length > 0) {
			setGamesList(games);
			console.log(gamesList);
		}
	}, [games]);

	const sortedGames = useMemo(() => {
		if (gamesList) {
			return [...gamesList].filter((game) =>
				//@ts-ignore
				game.title.toLowerCase().includes(searchQuery)
			);
		} else {
			return gamesList;
		}
	}, [searchQuery, gamesList]);

	if (isLoading) {
		return (
			<div className={cl.games}>
				<Loader />
			</div>
		);
	}

	return (
		<>
			<div style={{ marginBottom: "1rem", padding: "1rem 1.5rem" }}>
				<input
					type="text"
					value={searchQuery}
					onChange={(e: any) => setSearchQuery(e.target.value)}
				/>
			</div>
			<div className={cl.games}>
				{
					//@ts-ignore
					sortedGames.map((game) => (
						<GameItem key={game.title} game={game} />
					))
				}
			</div>
		</>
	);
};

export default GameList;
