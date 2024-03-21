import React, { useState } from "react";
import { ShopItem } from "../../types/shopItem";
import { shopItems } from "../../mocks/shopItems";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/page/page-actions";

export function Search(): JSX.Element {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState<ShopItem[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setSearch(inputValue);
    setResult(inputValue.length ? shopItems.filter((item) => item.name.includes(inputValue)) : []);
  };

  const dispatch = useDispatch();

  return (
    <div className="search user-navigation__search">
      <form action="" className="search__form">
        <label htmlFor="search">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="search"
            value={search}
            onChange={handleInputChange}
          />
        </label>
      </form>
      {result.length > 0 && (
        <ul className="search__result">
          {result.map((item) => (
            <li className="search__item search-item" key={item.id}>
              <img src={item.img} alt={item.name} width={46} height={46}/>
              <div onClick={() => dispatch(addToCart({item: item}))}>
                <span className="search-item__name">{item.name}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
