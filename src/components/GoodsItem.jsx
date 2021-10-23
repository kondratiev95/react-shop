export default function GoodsItem(props) {
    const { 
        id, 
        name, 
        description, 
        price, 
        icon:img,
        addToBasket = Function.prototype
    } = props;

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