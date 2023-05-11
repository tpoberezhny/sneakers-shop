import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Cart from './components/Cart';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    fetch('https://645c10aca8f9e4d6e77a2ad8.mockapi.io/items').then((res) => {
      return res.json();
    }).then(json => {
      setItems(json);
    });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };

  return (
    <div className="wrapper">
      {cartOpened && <Cart items={cartItems} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="allSneakers">
          <h1>All Sneakers</h1>
          <div className="search-block">
            <img src="/image/search.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>



        <div className="sneakers">
          {items.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}

        </div>



      </div>
    </div>
  );
}

export default App;
