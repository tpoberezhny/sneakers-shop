import React, { useState, useContext } from "react";
import ContentLoader from "react-content-loader";

import AppContext  from "../../context";

import styles from "./Card.module.scss";

function Card({
  id,
  title,
  imageUrl,
  price,
  onFavorite,
  onPlus,
  favorited = false,
  loading = false,
}) {
  const { isItemAdded } = useContext(AppContext);
  const [isFavorite, SetIsFavorite] = useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, title, imageUrl, price });
  };

  const onClickFavorite = () => {
    onFavorite({ id, title, imageUrl, price });
    SetIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      { loading ? (
      <ContentLoader
        speed={2}
        width={175}
        height={250}
        viewBox="0 0 155 265"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
        <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
        <rect x="1" y="214" rx="5" ry="5" width="60" height="20" />
        <rect x="1" y="240" rx="5" ry="5" width="80" height="15" />
        <rect x="124" y="216" rx="10" ry="10" width="32" height="32" />
      </ContentLoader>
      ) : (
      <>
        <div className={styles.favorite} onClick={onClickFavorite}>
          <img
            src={isFavorite ? "/image/liked.svg" : "/image/unliked.svg"}
            alt="Unliked"
          />
        </div>
        <img width={133} height={112} src={imageUrl} alt="Sneakers" />
        <h5>{title}</h5>
        <div className={styles.sneakersInfo}>
          <div className={styles.sneakersPrice}>
            <span>Price:</span>
            <b>{price} Kč</b>
          </div>
          <img
            className={styles.plus}
            onClick={onClickPlus}
            src={isItemAdded(id) ? "/image/btn-checked.svg" : "/image/btn-plus.svg"}
            alt="Plus"
          />
        </div>
      </>
      )}
    </div>
  );
}

export default Card;
