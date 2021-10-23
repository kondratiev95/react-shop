import { useContext } from "react";
import { ShopContext } from "../context";

export default function Cart(props) {

    const { order, handleBasketShow = Function.prototype } = useContext(ShopContext);

    const quantity = order.length;

    return (
        <div 
            className="cart indigo lighten-2 white-text" 
            onClick={handleBasketShow}
        >
            <i className="material-icons">shopping_basket</i>
            {quantity ? <span className="card-quantity">{quantity}</span> : null}
        </div>
    )
}