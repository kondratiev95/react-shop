export default function Cart(props) {

    const {quantity = 0, handleBasketShow = Function.prototype} = props;

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