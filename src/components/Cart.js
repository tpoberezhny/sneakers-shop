function Cart({ onClose, items = [] }) {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2>Cart <img onClick={onClose} className="removeBtn" src="/image/btn-remove.svg" alt="Close" /></h2>

                <div className="items">
                   {items.map((obj) => (
                     <div className="cartItem">
                     <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="cartItemImg"></div>
                     <div className="description">
                         <p>{obj.title}</p>
                         <b>{obj.price} Kč</b>
                     </div>
                     <img className="removeBtn" src="/image/btn-remove.svg" alt="Remove Button" />
                 </div>
                   ))}
                </div>

                <div className="cartTotalBlock">
                    <ul>
                        <li>
                            <span>Total:</span>
                            <div></div>
                            <b>3 225 Kč</b>
                        </li>
                        <li>
                            <span>VAT 5%:</span>
                            <div></div>
                            <b>200 Kč</b>
                        </li>
                    </ul>
                    <button className="greenButton">Make an order <img src="/image/arrow.svg" alt="Arrow" /></button>
                </div>
            </div>
        </div>
    );
}

export default Cart;