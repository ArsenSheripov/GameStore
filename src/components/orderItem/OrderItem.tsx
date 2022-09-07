import React, { FC } from "react";
import { IGame } from "../../types/IGame";
import GameCover from "../gameCover/GameCover";
import cl from "./orderItem.module.scss";
import circleIcon from "../../assets/images/cancel-circular-button-svgrepo-com.svg";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { deleteItemFromCart } from "../../store/cart/reducer";

interface OrderItemProps {
	game: IGame;
}

const OrderItem: FC<OrderItemProps> = ({ game }) => {
	const dispatch = useAppDispatch();

	const handleClick = () => {
		dispatch(deleteItemFromCart(game.id));
	};

	return (
		<div className={cl.orderItem}>
			<div className={cl.orderItem__img}>
				<GameCover image={game.thumbnail} />
			</div>
			<div className={cl.orderItem__title}>
				<h2>{game.title}</h2>
			</div>
			<div className={cl.orderItem__price}>
				<p>10 $</p>
				<button onClick={handleClick}>
					<img src={circleIcon} alt="X" width={33} />
				</button>
			</div>
		</div>
	);
};

export default OrderItem;
