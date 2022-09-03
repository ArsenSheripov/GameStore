import GamePage from "../pages/game/GamePage";
import HomePage from "../pages/home/HomePage";
import StorePage from "../pages/storePage/StorePage";
import { GAME_ROUTE, HOME_ROUTE, STORE_ROUTE } from "./consts";

export const routes = [
    { path: HOME_ROUTE, component: <HomePage /> },
    { path: STORE_ROUTE, component: <StorePage /> },
    { path: GAME_ROUTE, component: <GamePage /> },
];
