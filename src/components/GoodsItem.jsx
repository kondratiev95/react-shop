import { useContext } from "react";
import { ShopContext } from "../context";

export default function GoodsItem(props) {
    const { 
        id, 
        name, 
        price, 
        full_background:img,
    } = props;

    const { addToBasket } = useContext(ShopContext)

    return  (
        <div className="card">
            <div className="card-image">
                {<img src={img} alt={name}/>}
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
            </div>
            <div className="card-action">
                <button className='btn' onClick={() => addToBasket({id, name, price})}>Купить</button>
                <span className="right" style={{fontSize: '17px'}}>{price}грн</span>
            </div>
        </div>
    )
}