function Cart(props) {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2>Cart <img onClick={props.onClose} className="removeBtn" src="/image/btn-remove.svg" alt="Close" /></h2>

                <div className="items">
                    <div className="cartItem">
                        <div style={{ backgroundImage: 'url(/image/sneakers/1.jpg)' }} className="cartItemImg"></div>
                        <div className="description">
                            <p>Nike Blazer Mid Suede</p>
                            <b>3 455 Kc</b>
                        </div>
                        <img className="removeBtn" src="/image/btn-remove.svg" alt="Remove Button" />
                    </div>
                </div>

                <div className="cartTotalBlock">
                    <ul>
                        <li>
                            <span>Total:</span>
                            <div></div>
                            <b>3 225 Kc</b>
                        </li>
                        <li>
                            <span>VAT 5%:</span>
                            <div></div>
                            <b>200 Kc</b>
                        </li>
                    </ul>
                    <button className="greenButton">Make an order <img src="/image/arrow.svg" alt="Arrow" /></button>
                </div>
            </div>
        </div>
    );
}

export default Cart;