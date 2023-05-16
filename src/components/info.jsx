import React, { useContext } from "react";
import AppContext from "../context";

const Info = ({ title, image, description }) => {
  const { setCartOpened } = useContext(AppContext);

  return (
    <div className="cartEmpty">
      <img
        width={120}
        src={image}
        alt="Empty Cart"
      />
      <h2>{title}</h2>
      <p className="text">{description}</p>
      <button onClick={() => setCartOpened(false)} className="greenButton">
        <img src="/image/arrow.svg" alt="Arrow" />
        Go back
      </button>
    </div>
  );
};

export default Info;
