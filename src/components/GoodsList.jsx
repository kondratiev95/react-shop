import GoodsItem from "./GoodsItem";
import { useContext } from "react";
import { ShopContext } from "../context";


export default function GoodsList(props) {
    const { goods = [] } = useContext(ShopContext);

    if(!goods.length) {
        return <h3>Nothing here</h3>
    }

    return (
        <div className="goods">
            {goods.map(good => (
                <GoodsItem key={good.id} {...good}/>
            ))}
        </div>
    )
}