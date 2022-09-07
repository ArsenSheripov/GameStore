import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import GameCover from "../../components/gameCover/GameCover";
import GameBuy from "../../components/games/GameBuy";
import GameGenre from "../../components/games/GameGenre";
import Loader from "../../components/UI/Loader/Loader";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchGame } from "../../store/ActionCreators";
import cl from "./gamePage.module.scss";

const GamePage = () => {
	const params = useParams();
	const dispatch = useAppDispatch();
	//@ts-ignore
	const { game, isLoading, error } = useAppSelector((state) => state.game);

	useEffect(() => {
		dispatch(fetchGame(params.id));
		console.log(game);
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
					{
						//@ts-ignore
						game.title
					}{" "}
					{params.id}
				</h1>
				<div className={cl.gamePage__video}>
					<iframe
						width="90%"
						height="400px"
						src={
							//@ts-ignore
							game.video
						}
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					></iframe>
				</div>
			</div>
			<div className={cl.gamePage__rightSide}>
				<GameCover
					image={
						//@ts-ignore
						game.thumbnail
					}
				/>
				<p className={cl.gamePage__description}>
					{
						//@ts-ignore
						game.short_description
					}
				</p>
				<div className={cl.gamePage__genre}>
					<p>Популярные метки:</p>
					{
						//@ts-ignore
						game.genres.map((genre: string) => (
							<GameGenre genre={genre} key={genre} />
						))
					}
				</div>
				<div
					style={{
						position: "relative",
						width: "20rem",
						height: "2rem",
					}}
				>
					<GameBuy //@ts-ignore
						game={game}
					/>
				</div>
			</div>
		</div>
	);
};

export default GamePage;
