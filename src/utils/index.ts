import { IGame } from "../types/IGame"

export const calcTotalPrice = (items:any) => items.reduce((acc:any, item:any)=> acc+=item.price,0)