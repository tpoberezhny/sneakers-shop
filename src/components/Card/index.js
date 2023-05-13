import React, { useState } from 'react';
import styles from './Card.module.scss';

function Card({ id, title, imageUrl, price, onFavorite, onPlus, favorited = false, added = false }) {
    const [isAdded, setIsAdded] = useState(added);
    const [isFavorite, SetIsFavorite] = useState(favorited);

    const onClickPlus = () => {
        onPlus({ id, title, imageUrl, price });
        setIsAdded(!isAdded);
    };

    const onClickFavorite = () => {
        onFavorite({ id, title, imageUrl, price });
        SetIsFavorite(!isFavorite)
    };

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite}>
                <img src={isFavorite ? "/image/liked.svg" : "/image/unliked.svg"} alt="Unliked" />
            </div>
            <img width={133} height={112} src={imageUrl} alt="Sneakers" />
            <h5>{title}</h5>
            <div className={styles.sneakersInfo}>
                <div className={styles.sneakersPrice}>
                    <span>Price:</span>
                    <b>{price} Kč</b>
                </div>
                <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "/image/btn-checked.svg" : "/image/btn-plus.svg"} alt="Plus" />
            </div>
        </div>
    );
}

export default Card;