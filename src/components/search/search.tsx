import { useState } from "react";
import { ShopItem } from "../../types/shopItem";
import { shopItems } from "../../mocks/shopItems";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, toggleSearch } from "../../store/page/page-actions";
import { RootState } from "../../store/RootState";
import { useOutsideClick } from "../../hooks/useOutsideClick";

export function Search(): JSX.Element {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState<ShopItem[]>([]);
  const isSearchOpened = useSelector((state: RootState) => state.page.isSearchOpened);
  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setSearch(inputValue);
    setResult(inputValue.length ? shopItems.filter((item) => item.name.includes(inputValue)) : []);
  };

  const ref = useOutsideClick(() => {
    dispatch(toggleSearch({isOpened: false}))
  }) as React.RefObject<HTMLDivElement>;

  return (
    <div className={`search user-navigation__search ${isSearchOpened ? 'opened' : ''}`} ref={ref}>
      <form action="" className="search__form">
        <label className="search__input-wrapper" htmlFor="search">
          <input
            className="search__input"
            type="text"
            name="search"
            id="search"
            placeholder="search"
            value={search}
            onChange={handleInputChange}
            autoComplete="false"
          />
        </label>
      </form>
      {result.length > 0 && (
        <ul className="search__result">
          {result.map((item) => (
            <li className="search__item search-item" key={item.id}>
              <img src={item.img} alt={item.name} width={46} height={46}/>
              <div onClick={() => dispatch(addToCart({ item: item }))}>
                <span className="search-item__name">{item.name}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
