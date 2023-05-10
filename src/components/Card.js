function Card() {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/image/heart-unliked.svg" alt="Unliked" />
            </div>
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
    );
}

export default Card;