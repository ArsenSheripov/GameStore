import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { deleteItemFromCart, setItemInCart } from "../../store/cart/reducer";
import { IGame } from "../../types/IGame";
import AppButton from "../UI/button/AppButton";
import cl from "./game.module.scss";

interface GameItemProps {
    game: IGame;
}

const GameItem: FC<GameItemProps> = ({ game }) => {
    const dispatch = useAppDispatch();
    const items = useAppSelector((state) => state.cart.itemsInCart);
    const isItemInCart = items.some((item) => item.id === game.id);

    const handleClick = (e: any) => {
        e.stopPropagation();
        if (isItemInCart) {
            dispatch(deleteItemFromCart(game.id));
        } else {
            dispatch(setItemInCart(game));
        }
    };

    return (
        <div className={cl.games__item}>
            <img className={cl.games__img} src={game.image} alt="" />
            <h1 className={cl.games__name}>{game.title}</h1>
            <p className={cl.games__description}>{game.description}</p>
            <div className={cl.games__order}>
                <b className={cl.games__price}>{game.price} $</b>
                <AppButton onClick={handleClick}>
                    {isItemInCart ? "Удвлить" : "В корзину"}
                </AppButton>
            </div>
        </div>
    );
};

export default GameItem;
