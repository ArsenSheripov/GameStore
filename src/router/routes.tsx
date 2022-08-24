import Home from "../pages/home/Home";
import StorePage from "../pages/storePage/StorePage";
import { HOME_ROUTE, STORE_ROUTE } from "./consts";

export const routes = [
	{ path: HOME_ROUTE, component: <Home /> },
	{ path: STORE_ROUTE, component: <StorePage /> },
]