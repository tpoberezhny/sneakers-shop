import React, { useState, useEffect } from 'react';
import styles from './Card.module.scss';

function Card(props) {
    const [isAdded, setIsAdded] = useState(false);

    const onClickPlus = () => {
        setIsAdded(!isAdded);
    };

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={props.onFavorite}>
                <img src="/image/heart-unliked.svg" alt="Unliked" />
            </div>
            <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
            <h5>{props.title}</h5>
            <div className={styles.sneakersInfo}>
                <div className={styles.sneakersPrice}>
                    <span>Price:</span>
                    <b>{props.price} Kc</b>
                </div>
                <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "/image/btn-checked.svg" : "/image/btn-plus.svg"} alt="Plus" />
            </div>
        </div>
    );
}

export default Card;