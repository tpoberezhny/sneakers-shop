import Card from './components/Card';
import Header from './components/Header';
import Cart from './components/Cart';

function App() {
  return (
    <div className="wrapper">
      <Cart />
      <Header />
      <div className="content">
        <div className="allSneakers">
          <h1>All Sneakers</h1>
          <div className="search-block">
            <img src="/image/search.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>



        <div className="sneakers">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>



      </div>
    </div>
  );
}

export default App;
