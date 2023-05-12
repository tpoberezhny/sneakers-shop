import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Cart from './components/Cart';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    axios.get('https://645c10aca8f9e4d6e77a2ad8.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://645c10aca8f9e4d6e77a2ad8.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    });
    axios.get('https://645c10aca8f9e4d6e77a2ad8.mockapi.io/favorites').then((res) => {
      setFavorites(res.data);
    });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://645c10aca8f9e4d6e77a2ad8.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://645c10aca8f9e4d6e77a2ad8.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    if (favorites.find((favObj) => favObj.id === obj.id)) {
      axios.delete(`https://645c10aca8f9e4d6e77a2ad8.mockapi.io/favorites/${obj.id}`);
    } else {
      const { data } = await axios.post('https://645c10aca8f9e4d6e77a2ad8.mockapi.io/favorites', obj);
      setFavorites((prev) => [...prev, data]);
    }
  };


  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper">
      {cartOpened && <Cart items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route path="/" exact element={
          <Home items={items} searchValue={searchValue} setSearchValue={setSearchValue} onChangeSearchInput={onChangeSearchInput} onAddToFavorite={onAddToFavorite} onAddToCart={onAddToCart} />
        }></Route>
        <Route path="/favorites" exact element={
          <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
