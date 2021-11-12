import { BUY_ICECREAM } from "./iceCreamTypes";

export const buyIceCream = (quantity) => {
    return {
        type: BUY_ICECREAM,
        payload: quantity
    }
}