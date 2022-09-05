import React from "react";
import OrderItem from "../../components/orderItem/OrderItem";
import { useAppSelector } from "../../hooks/reduxHooks";
import { calcTotalPrice, enumerate } from "../../components/utils";
import cl from "./orderPage.module.scss";
import AppButton from "../../components/UI/button/AppButton";

const OrderPage = () => {
	const items = useAppSelector((state) => state.cart.itemsInCart);
	const totalCount = calcTotalPrice(items);

	if (items.length === 0) {
		return <h1 style={{ textAlign: "center" }}>Ваша корзина пуста!</h1>;
	}

	return (
		<div className={`container ${cl.orderPage}`}>
			<div className={cl.orderPage__items}>
				{items.map((item) => (
					<OrderItem key={item.title} game={item} />
				))}
			</div>
			<div className={cl.orderPage__footer}>
				<span className={cl.orderPage__totalPrice}>
					{items.length}{" "}
					{enumerate(items.length, ["товар", "товара", "товаров"])} на
					сумму {totalCount}
				</span>
				<AppButton>Купить</AppButton>
			</div>
		</div>
	);
};

export default OrderPage;
