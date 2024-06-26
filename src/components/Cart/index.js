import React, { useState, useContext } from "react";
import axios from "axios";

import Info from "../info";
import AppContext from "../../context";

import styles from "./Cart.module.scss";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Cart({ onClose, onRemove, items = [], opened }) {
  const { cartItems, setCartItems } = useContext(AppContext);
  const [orderId, setOrderId] = useState(null);
  const [orderComplete, setOrderComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://65fdc1c7b2a18489b3856224.mockapi.io/api/tima/orders",
        { items: cartItems }
      );
      setOrderId(data.id);
      setOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
          await axios.delete("https://65fdc1c7b2a18489b3856224.mockapi.io/api/tima/cart/" + item.id);
          await delay(1000);
      }; //dosnt work with forEach, doing delay cause mockApi can block

    } catch (error) {
      alert("Can`t make an order :(");
    }
    setIsLoading(false);
  };

  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
      <div className={styles.drawer}>
        <h2>
          Cart{" "}
          <img
            onClick={onClose}
            className="removeBtn"
            src="image/btn-remove.svg"
            alt="Close"
          />
        </h2>

        {items.length > 0 ? (
          <div className={styles.orderItems}>
            <div className={styles.items}>
              {items.map((obj) => (
                <div key={obj.id} className={styles.cartItem}>
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className={styles.cartItemImg}
                  ></div>
                  <div className={styles.description}>
                    <p>{obj.title}</p>
                    <b>{obj.price} Kč</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="image/btn-remove.svg"
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
                  <b>{totalPrice} Kč</b>
                </li>
                <li>
                  <span>VAT 5%:</span>
                  <div></div>
                  <b>{Math.round((totalPrice / 100) * 5)} Kč</b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className="greenButton"
              >
                Make an order <img src="image/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={orderComplete ? "Order Complete!" : "Cart is Empty"}
            description={
              orderComplete
                ? `Your order #${orderId} will soon be transferred to courier delivery`
                : "Add at least one pair of sneakers for an order"
            }
            image={
              orderComplete
                ? "image/complete-order.jpg"
                : "image/empty-cart.jpg"
            }
          />
        )}
      </div>
    </div>
  );
}

export default Cart;
