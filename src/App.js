import React, { useState } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Cart from './components/Cart';

function App() {
  const [items, setItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  fetch('https://645c10aca8f9e4d6e77a2ad8.mockapi.io/items').then((res) => {
    return res.json();
  }).then(json => {
    setItems(json);
  });

  return (
    <div className="wrapper">
      {cartOpened && <Cart onClose={() => setCartOpened(false)} />} 
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
          {items.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl} 
              />
          ))}

        </div>



      </div>
    </div>
  );
}

export default App;
