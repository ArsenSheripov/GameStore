import React from "react";
import { useParams } from "react-router-dom";
import GameCover from "../../components/gameCover/GameCover";
import GameBuy from "../../components/games/GameBuy";
import GameGenre from "../../components/games/GameGenre";
import { useAppSelector } from "../../hooks/reduxHooks";
import cl from "./gamePage.module.scss";

const GamePage = () => {
	const params = useParams();
	const game = useAppSelector((state) => state.games.currentGame);

	if (!game) {
		return null;
	}

	return (
		<div className={` container ${cl.gamePage}`}>
			<div className={cl.gamePage__leftSide}>
				<h1 className={cl.gamePage__title}>{game.title}</h1>
				<div className={cl.gamePage__video}>
					<iframe
						width="90%"
						height="400px"
						src={game.video}
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					></iframe>
				</div>
			</div>
			<div className={cl.gamePage__rightSide}>
				<GameCover image={game.image} />
				<p className={cl.gamePage__description}>{game.description}</p>
				<div className={cl.gamePage__genre}>
					<p>Популярные метки:</p>
					{game.genres.map((genre) => (
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
					<GameBuy game={game} />
				</div>
			</div>
		</div>
	);
};

export default GamePage;
