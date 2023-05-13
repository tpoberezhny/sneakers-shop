function Cart({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Cart{" "}
          <img
            onClick={onClose}
            className="removeBtn"
            src="/image/btn-remove.svg"
            alt="Close"
          />
        </h2>

        {items.length > 0 ? (
          <div>
            <div className="items">
              {items.map((obj) => (
                <div key={obj.id} className="cartItem">
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"
                  ></div>
                  <div className="description">
                    <p>{obj.title}</p>
                    <b>{obj.price} Kč</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="/image/btn-remove.svg"
                    alt="Remove Button"
                  />
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
              <button className="greenButton">
                Make an order <img src="/image/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <div className="cartEmpty">
            <img
              width={120}
              height={120}
              src="image/empty-cart.jpg"
              alt="Empty Cart"
            />
            <h2>Cart is Empty</h2>
            <p className="text">
              Add at least one pair of sneakers for an order
            </p>
            <button onClick={onClose} className="greenButton">
              <img src="/image/arrow.svg" alt="Arrow" />
              Go back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
