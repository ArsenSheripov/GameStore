import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameService from "../../API/GameService";
import GameCover from "../../components/gameCover/GameCover";
import GameBuy from "../../components/games/GameBuy";
import GameGenre from "../../components/games/GameGenre";
import Loader from "../../components/UI/Loader/Loader";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchGame } from "../../store/ActionCreators";
import { IGame } from "../../types/IGame";
import cl from "./gamePage.module.scss";

const GamePage = () => {
	const params = useParams();
	const [gameItem, setGameItem] = useState<any>();
	const dispatch = useAppDispatch();
	const { game, isLoading, error } = useAppSelector((state) => state.game);

	/*useEffect(() => {
		const options = {
			method: "GET",
			url: "https://free-to-play-games-database.p.rapidapi.com/api/game",
			params: { id: params.id },
			headers: {
				"X-RapidAPI-Key":
					"6ec0ace8a8msh42d3c0eae41a445p13db2fjsn3399c45d1c27",
				"X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
			},
		};

		axios
			.request(options)
			.then(function (response) {
				console.log(response.data);
				setGameItem(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
		console.log(gameItem);
	}, []);*/

	useEffect(() => {
		dispatch(fetchGame(params.id));
		console.log(game);
		setGameItem(game);
		console.log(gameItem);
	}, []);

	if (isLoading) {
		return (
			<div className={` container ${cl.gamePage}`}>
				<Loader />
			</div>
		);
	}

	if (error) {
		return <h1>{error}</h1>;
	}

	return (
		<div className={` container ${cl.gamePage}`}>
			<div className={cl.gamePage__leftSide}>
				<h1 className={cl.gamePage__title}>
					{gameItem.title} {params.id}
				</h1>
				<div className={cl.gamePage__video}>
					<iframe
						width="90%"
						height="400px"
						src={gameItem.video}
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					></iframe>
				</div>
			</div>
			<div className={cl.gamePage__rightSide}>
				<GameCover image={gameItem.thumbnail} />
				<p className={cl.gamePage__description}>
					{gameItem.short_description}
				</p>
				<div className={cl.gamePage__genre}>
					<p>Популярные метки:</p>
					{gameItem.genres.map((genre: string) => (
						<GameGenre genre={genre} key={genre} />
					))}
				</div>
				<div
					style={{
						position: "relative",
						width: "20rem",
						height: "2rem",
					}}
				>
					<GameBuy game={gameItem} />
				</div>
			</div>
		</div>
	);
};

export default GamePage;
