import React, { FC } from 'react';
import { IGame } from '../../types/IGame';
import cl from './game.module.scss'

interface GameItemProps {
	game: IGame
}

const GameItem: FC<GameItemProps> = ({ game }) => {
	return (
		<div className={cl.games__item}>
			<img className={cl.games__img} src={game.img} alt="" />
			<h1 className={cl.games__name}>{game.name}</h1>
			<p className={cl.games__description}>{game.description}</p>
			<b className={cl.games__price}>{game.price} $</b>
		</div>
	)
}

export default GameItem;