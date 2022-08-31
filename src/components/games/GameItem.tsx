import React, { FC } from 'react';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { setItemInCart } from '../../store/cart/reducer';
import { IGame } from '../../types/IGame';
import AppButton from '../UI/button/AppButton';
import cl from './game.module.scss'

interface GameItemProps {
	game: IGame
}

const GameItem: FC<GameItemProps> = ({ game }) => {
	const dispatch = useAppDispatch()

	const handleClick=(e:any)=>{
		e.stopPropagation()
		dispatch(setItemInCart(game))
	}
	return (
		<div className={cl.games__item}>
			<img className={cl.games__img} src={game.image} alt="" />
			<h1 className={cl.games__name}>{game.title}</h1>
			<p className={cl.games__description}>{game.description}</p>
			<div className={cl.games__order}>
				<b className={cl.games__price}>{game.price} $</b>
				<AppButton
					onClick={handleClick}
				>
					В корзину
				</AppButton>
			</div>
		</div>
	)
}

export default GameItem;