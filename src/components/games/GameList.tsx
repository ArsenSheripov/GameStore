import React, { FC } from 'react';
import gtaImg from '../../assets/images/volga.jpg'
import GameItem from './GameItem';
import cl from './game.module.scss'

const GameList: FC = () => {
	const games = [
		{ img: gtaImg, name: 'Grand theft auto VI', description: 'Blablalba...', price: 30, },
		{ img: gtaImg, name: 'Grand  auto VI', description: 'Blablalba...', price: 45, },
		{ img: gtaImg, name: 'Grand theft  VI', description: 'Blablalba...', price: 35, },
	]

	return (
		<div className={cl.games}>
			{games.map(game =>
				<GameItem key={game.name} game={game} />
			)}
		</div>
	)
}

export default GameList;
