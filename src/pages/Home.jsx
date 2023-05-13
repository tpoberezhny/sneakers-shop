import Card from "../components/Card";

function Home({
  items,
  cartItems,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
}) {
  return (
    <div className="content">
      <div className="allSneakers">
        <h1>
          {searchValue ? `Your search term: "${searchValue}"` : "All Sneakers"}
        </h1>
        <div className="search-block">
          <img src="/image/search.svg" alt="Search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="removeBtn"
              src="/image/btn-remove.svg"
              alt="Clear"
            />
          )}
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Search..."
          />
        </div>
      </div>

      <div className="sneakers">
        {items
          .filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          ) /**Making possible to search in lower register */
          .map((item, index) => (
            <Card
              key={index}
              onFavorite={(obj) => onAddToFavorite(obj)}
              onPlus={(obj) => onAddToCart(obj)}
              added={cartItems.some((obj) => Number(obj.id) === Number(item.id))}
              {...item}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
