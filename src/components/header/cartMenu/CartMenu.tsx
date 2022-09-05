import React, { FC } from "react";
import { IGame } from "../../../types/IGame";
import { calcTotalPrice } from "../../utils";
import AppButton from "../../UI/button/AppButton";
import CartGame from "./CartGame";
import cl from "./cartMenu.module.scss";

interface CartMenuProps {
	items: IGame[];
	onClick: () => void;
}

const CartMenu: FC<CartMenuProps> = ({ items, onClick }) => {
	const totalPrice = calcTotalPrice(items);
	return (
		<div className={cl.cartMenu}>
			<div className={cl.cartMenu__gameList}>
				{items.length > 0
					? items.map((game) => (
							<CartGame key={game.title} game={game} />
					  ))
					: "Корзина пуста!"}
			</div>
			{items.length > 0 ? (
				<div className={cl.cartMenu__order}>
					<div className={cl.cartMenu__totalPrice}>
						<span>Итого:</span>
						<span>{totalPrice} $</span>
					</div>
					<AppButton onClick={onClick}>Оформить заказ.</AppButton>
				</div>
			) : null}
		</div>
	);
};

export default CartMenu;
