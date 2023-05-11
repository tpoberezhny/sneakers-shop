import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/Card';
import Header from './components/Header';
import Cart from './components/Cart';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    axios.get('https://645c10aca8f9e4d6e77a2ad8.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://645c10aca8f9e4d6e77a2ad8.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://645c10aca8f9e4d6e77a2ad8.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://645c10aca8f9e4d6e77a2ad8.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper">
      {cartOpened && <Cart items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
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
