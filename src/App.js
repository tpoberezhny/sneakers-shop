import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Cart from './components/Cart';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
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

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper">
      {cartOpened && <Cart items={cartItems} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="allSneakers">
          <h1>{searchValue ? `Your search term: "${searchValue}"` : 'All Sneakers'}</h1>
          <div className="search-block">
            <img src="/image/search.svg" alt="Search" />
            {searchValue && <img onClick={() => setSearchValue('')} className="removeBtn" src="/image/btn-remove.svg" alt="Clear" />}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search..." />
          </div>
        </div>



        <div className="sneakers">
          {items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))/**Making possible to search in lower register */.map((item, index) => (
            <Card
              key={index}
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
