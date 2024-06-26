import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "../components/Card";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const { data } = await axios.get(
          "https://65fdc1c7b2a18489b3856224.mockapi.io/api/tima/orders"
        );
        setOrders(data.map((obj) => obj.items).flat());
        setIsLoading(false);
      } catch (error) {
        alert('Can`t show orders');
      }
    }

    fetchOrders();
  }, []);

  return (
    <div className="content">
      <div className="allSneakers">
        <h1>My orders</h1>
      </div>

      <div className="sneakers">
        {(isLoading ? [...Array(10)] : orders).map((item, index) => (
          <Card
            key={index}
            loading={isLoading}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Orders;
