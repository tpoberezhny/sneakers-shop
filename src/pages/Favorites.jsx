import Card from "../components/Card";

function Favorites({ items, onAddToFavorite }) {

  return (
    <div className="content">
      <div className="allSneakers">
        <h1>Favorites</h1>
      </div>

      <div className="sneakers">
        {items.map((item, index) => (
          <Card
            key={index}
            favorited={true}
            onFavorite={onAddToFavorite}
            {...item}
          />
        ))}</div>
    </div>
  );
}

export default Favorites;