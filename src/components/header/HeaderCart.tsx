import React, { useState } from "react";
import cartIcon from "../../assets/images/shopping-cart-outline-svgrepo-com.svg";
import { useAppSelector } from "../../hooks/reduxHooks";
import { calcTotalPrice } from "../../utils";
import CartMenu from "./cartMenu/CartMenu";
import cl from "./header.module.scss";

const HeaderCart = () => {
    const [cartVisible, setCartVisible] = useState(false);
    const items = useAppSelector((state) => state.cart.itemsInCart);
    const totalPrice = calcTotalPrice(items);

    const handleOpen = () => {
        console.log(items);
    };

    return (
        <div className={cl.header__cart}>
            <button
                className={cl.header__cartBtn}
                onClick={() => setCartVisible(!cartVisible)}
            >
                <img src={cartIcon} alt="cartIcon" width={25} />
                <span>{items.length}</span>
            </button>
            {totalPrice > 0 && <span>{totalPrice} $</span>}
            {cartVisible && <CartMenu items={items} onClick={() => null} />}
        </div>
    );
};

export default HeaderCart;
