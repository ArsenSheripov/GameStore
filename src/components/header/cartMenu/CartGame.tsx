import React, { FC } from "react";
import { IGame } from "../../../types/IGame";
import cl from "./cartMenu.module.scss";

interface CartGameProps {
    game: IGame;
}

const CartGame: FC<CartGameProps> = ({ game }) => {
    return (
        <div className={cl.cartMenu__game}>
            <span>{game.title}</span>
            <span className={cl.cartMenu__price}>{game.price} $</span>
        </div>
    );
};

export default CartGame;
