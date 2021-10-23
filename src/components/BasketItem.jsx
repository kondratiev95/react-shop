import { useContext } from "react";
import { ShopContext } from "../context";


export default function BasketItem(props) {

    const { id, name, price, quantity } = props;

    const { removeFromBasket, incQuantity, decQuantity } = useContext(ShopContext);

    return (
    
        <li class="collection-item">

            {name} 
            <i className="material-icons basket-quantity" onClick={() => incQuantity(id)}>add</i>
            x{quantity}
            <i className="material-icons basket-quantity" onClick={() => decQuantity(id)}>remove</i>
            = {price * quantity}


            <span href="#!" class="secondary-content" onClick={() => removeFromBasket(id)}>
                <i class="material-icons basket-delete">
                    close
                </i>
            </span>

        </li>
    )
}