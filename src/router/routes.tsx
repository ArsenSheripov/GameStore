import GamePage from "../pages/gamePage/GamePage";
import HomePage from "../pages/homePage/HomePage";
import OrderPage from "../pages/orderPage/OrderPage";
import StorePage from "../pages/storePage/StorePage";
import { GAME_ROUTE, HOME_ROUTE, ORDER_ROUTE, STORE_ROUTE } from "./consts";

export const routes = [
	{ path: HOME_ROUTE, component: <HomePage /> },
	{ path: STORE_ROUTE, component: <StorePage /> },
	{ path: GAME_ROUTE, component: <GamePage /> },
	{ path: ORDER_ROUTE, component: <OrderPage /> },
];
