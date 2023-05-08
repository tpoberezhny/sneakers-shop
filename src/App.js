

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/image/logo.png" />
          <div className="headerInfo">
            <h3>Sneakers Shop</h3>
            <p>Shop of the best Sneakers</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <img width={18} height={18} src="/image/cart.svg" />
            <span> 3 455 Kc </span>
          </li>
          <li>
            <img width={20} height={20} src="/image/user.svg" />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>All Sneakers</h1>



        <div className="sneakers">
          <div className="card">
            <img width={133} height={112} src="/image/sneakers/1.jpg" alt="Sneakers" />
            <h5>Nike Blazer Mid Suede</h5>
            <div className="sneakersInfo">
              <div className="sneakersPrice">
                <span>Price:</span>
                <b>3 455 Kc</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/image/plus.svg" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/image/sneakers/2.jpg" alt="Sneakers" />
            <h5>Nike Air Max 270</h5>
            <div className="sneakersInfo">
              <div className="sneakersPrice">
                <span>Price:</span>
                <b>3 999 Kc</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/image/plus.svg" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/image/sneakers/3.jpg" alt="Sneakers" />
            <h5>Nike Blazer Mid Suede</h5>
            <div className="sneakersInfo">
              <div className="sneakersPrice">
                <span>Price:</span>
                <b>3 355 Kc</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/image/plus.svg" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/image/sneakers/4.jpg" alt="Sneakers" />
            <h5>Puma X Future Rider</h5>
            <div className="sneakersInfo">
              <div className="sneakersPrice">
                <span>Price:</span>
                <b>3 899 Kc</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/image/plus.svg" />
              </button>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
}

export default App;
