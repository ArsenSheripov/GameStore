import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { deleteItemFromCart, setItemInCart } from "../../store/cart/reducer";
import { IGame } from "../../types/IGame";
import AppButton from "../UI/button/AppButton";
import cl from "./game.module.scss";

interface GameBuyProps {
	game: IGame;
}

const GameBuy: FC<GameBuyProps> = ({ game }) => {
	const dispatch = useAppDispatch();
	const items = useAppSelector((state) => state.cart.itemsInCart);
	const isItemInCart = items.some((item) => item.id === game.id);
	const handleCart = (e: any) => {
		e.stopPropagation();
		if (isItemInCart) {
			dispatch(deleteItemFromCart(game.id));
		} else {
			dispatch(setItemInCart(game));
		}
	};
	return (
		<div className={cl.games__order}>
			<b className={cl.games__price}>10$</b>
			<AppButton
				onClick={handleCart}
				type={isItemInCart ? "primary" : ""}
			>
				{isItemInCart ? "Удвлить" : "В корзину"}
			</AppButton>
		</div>
	);
};

export default GameBuy;
