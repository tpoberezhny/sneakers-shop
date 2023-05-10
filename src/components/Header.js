function Header() {
    return (
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
    );
}

export default Header;