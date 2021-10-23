import BasketItem from "./BasketItem";

export default function BasketList(props) {
    const {
        order = [], 
        handleBasketShow = Function.prototype, 
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0) 

    return (
        <ul class="collection basket-list">

            <li class="collection-item active">Корзина</li>

            {
                order.length ? order.map(item => (
                    <BasketItem 
                        key={item.id} 
                        {...item} 
                        removeFromBasket={removeFromBasket}
                        incQuantity={incQuantity}
                        decQuantity={decQuantity}
                    />
                )) : <li class="collection-item">Корзина пуста</li>
            }

            <li class="collection-item active">Общая стоимость: {totalPrice} грн.</li>
            <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
            <button class="secondary-content btn btn-small left">Оформить</button>
            
        </ul>
    )
}