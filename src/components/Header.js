import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header>
            <Link to="/">
            <div className="headerLeft">
                <img width={40} height={40} src="/image/logo.png" alt="Logo"/>
                <div className="headerInfo">
                    <h3>Sneakers Shop</h3>
                    <p>Shop of the best Sneakers</p>
                </div>
            </div>
            </Link>
            <ul className="headerRight">
                <li onClick={props.onClickCart} className="cart">
                    <img width={18} height={18} src="/image/cart.svg" alt="Cart"/>
                    <span> 3 455 Kč </span>
                </li>
                <li className="heart">
                    <Link to="/favorites"> 
                    <img width={20} height={20} src="/image/heart.svg" alt="Heart"/>
                    </Link>
                </li>
                <li className="profile">
                    <img width={20} height={20} src="/image/user.svg" alt="User"/>
                </li>
            </ul>
        </header>
    );
}

export default Header;