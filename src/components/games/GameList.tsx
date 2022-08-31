import React, { FC } from 'react';
import gtaImg from '../../assets/images/volga.jpg'
import GameItem from './GameItem';
import cl from './game.module.scss'
import { GAMES } from '../../mock';

const GameList: FC = () => {

	return (
		<div className={cl.games}>
			{GAMES.map(game =>
				<GameItem key={game.title} game={game} />
			)}
		</div>
	)
}

export default GameList;
