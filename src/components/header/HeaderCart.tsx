import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import cartIcon from "../../assets/images/shopping-cart-outline-svgrepo-com.svg";
import { useAppSelector } from "../../hooks/reduxHooks";
import { ORDER_ROUTE } from "../../router/consts";
import { calcTotalPrice } from "../../utils/utils";
import CartMenu from "./cartMenu/CartMenu";
import cl from "./header.module.scss";

const HeaderCart = () => {
	const [cartVisible, setCartVisible] = useState(false);
	const items = useAppSelector((state) => state.cart.itemsInCart);
	const totalPrice = calcTotalPrice(items);
	const navigate = useNavigate();

	const handleOpen = (e: any) => {
		setCartVisible(!cartVisible);
	};

	const handleOrder = () => {
		setCartVisible(false);
		navigate(ORDER_ROUTE);
	};

	return (
		<div className={cl.header__cart}>
			<button
				className={cl.header__cartBtn}
				onClick={(e: any) => handleOpen(e)}
			>
				<img src={cartIcon} alt="cartIcon" width={25} />
				<span>{items.length}</span>
			</button>
			{cartVisible && <CartMenu items={items} onClick={handleOrder} />}
		</div>
	);
};

export default HeaderCart;
