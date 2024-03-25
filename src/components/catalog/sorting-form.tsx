import { useState } from "react";
import { ShopItem } from "../../types/shopItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/RootState";
import { FatsAmount, SortTypes } from "../../const";
import { filterByFat, sortCatalog } from "../../store/page/page-actions";
import { TwoThumbInputRange } from "react-two-thumb-input-range";

export function SortingForm(): JSX.Element {
  const dispatch = useDispatch();
  const shopItems = useSelector((state: RootState) => state.page.catalog);

  const [sortType, setSortType] = useState<SortTypes>(SortTypes.Popular);
  
  const [leftPrice, setLeftPrice] = useState(30);
  const [rightPrice, setRightPrice] = useState(35);

  const [formData, setFormData] = useState({
    sorting: SortTypes.Popular,
    fat: FatsAmount.Ten,
    toppings: null,
  });

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sortBy = event.target.value as SortTypes;
    setSortType(sortBy);
    dispatch(sortCatalog({ sortBy }));
  };

  const handleResetForm = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSortType(SortTypes.Popular);
    setLeftPrice(30);
    setRightPrice(35);
    setFormData({
      sorting: SortTypes.Popular,
      fat: FatsAmount.Ten,
      toppings: null,
    });
    dispatch(sortCatalog({sortBy: SortTypes.Popular}))
  };

  const handleFatsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fat = Number(event.target.value);
    setFormData({
      ...formData,
      fat: fat
    })
    dispatch(filterByFat({ fat }));
  };

  function sortByPrice(a: ShopItem, b: ShopItem) {
    return a.price - b.price;
  }
  const sortedItems = [...shopItems];

  const minPrice = sortedItems.length ? sortedItems.sort(sortByPrice)[0].price * 10 : 0;
  const maxPrice = sortedItems.length ? sortedItems.sort(sortByPrice)[sortedItems.length - 1].price * 10 : 0;

  return (
    <form className="sorting-form" action="https://echo.htmlacademy.ru/" method="get">
      <fieldset className="sort-item">
        <legend className="sorting-label">Sorting by:</legend>
        <select name="sort by" id="sorting-by" onChange={handleSortChange} value={sortType}>
          <option value={SortTypes.Popular}>by popular</option>
          <option value={SortTypes.Price}>by price</option>
          <option value={SortTypes.Fats}>by fats</option>
        </select>
      </fieldset>
    
      <fieldset className="sort-item">
        <legend className="sorting-label">Price: {(leftPrice/10).toFixed(1)} $ – {(rightPrice/10).toFixed(1)} $</legend>
        <div className="range-wrapper">
          <TwoThumbInputRange
            min={minPrice}
            max={maxPrice}
            trackColor="#565C66"
            thumbColor="#2d3440"
            railColor="rgba(252, 252, 252, 0.3)"
            inputStyle={{width: '100%'}}
            values={[leftPrice, rightPrice]}
            showLabels={false}
            onChange={(values: [number, number]) => {
              setLeftPrice(values[0]);
              setRightPrice(values[1]);
              if (values[0] + 1 > values[1]) {
                setRightPrice(values[1] + 1)
              }
              if (values[1] - 1 < values[0]) {
                setLeftPrice(values[0] - 1)
              }
            }}
          />
        </div>
      </fieldset>

      <fieldset className="sort-item">
        <legend className="sorting-label">Fat:</legend>
        <ul className="fat-list">
          <li className="filters-item">
            <label htmlFor="zero-fats">
              <input type="radio" id="zero-fats" value={FatsAmount.NoFats} onChange={handleFatsChange} name="percent of fat" checked={formData.fat === FatsAmount.NoFats} className="fats-input visually-hidden"/>
              <span className="fats-mark"></span>
              <span className="fats-label">0%</span>
            </label>
          </li>
          <li className="filters-item">
            <label htmlFor="under-ten-fats">
              <input type="radio" id="under-ten-fats" value={FatsAmount.Ten} onChange={handleFatsChange} name="percent of fat" checked={formData.fat === FatsAmount.Ten} className="fats-input visually-hidden"/>
              <span className="fats-mark"></span>
              <span className="fats-label">Under 10%</span>
            </label>
          </li>
          <li className="filters-item">
            <label htmlFor="under-thirty-fats">
              <input type="radio" id="under-thirty-fats" value={FatsAmount.Thirty} onChange={handleFatsChange} name="percent of fat" checked={formData.fat === FatsAmount.Thirty} className="fats-input visually-hidden"/>
              <span className="fats-mark"></span>
              <span className="fats-label">Under 30%</span>
            </label>
          </li>
          <li className="filters-item">
            <label htmlFor="above-thirty-fats">
              <input type="radio" id="above-thirty-fats" value={FatsAmount.More} onChange={handleFatsChange} name="percent of fat" checked={formData.fat === FatsAmount.More} className="fats-input visually-hidden"/>
              <span className="fats-mark"></span>
              <span className="fats-label">Above 30%</span>
            </label>
          </li>
        </ul>
      </fieldset>
      <fieldset className="sort-item">
        <legend className="sorting-label">Toppings:</legend>
        <ul className="toppings-list">
          <li className="filters-item">
            <label htmlFor="chocolate">
              <input type="checkbox" id="chocolate" name="chocolate" className="toppings-input visually-hidden"/>
              <span className="toppings-mark"></span>
              <span className="toppings-label">Chocolate</span>
            </label>
          </li>
          <li className="filters-item">
            <label htmlFor="sugar-sprinkles">
              <input type="checkbox" id="sugar-sprinkles" name="sugar sprinkles" className="toppings-input visually-hidden"/>
              <span className="toppings-mark"></span>
              <span className="toppings-label">Sugar sprinkles</span>
            </label>
          </li>
          <li className="filters-item">
            <label htmlFor="fruits">
              <input type="checkbox" id="fruits" name="fruits" className="toppings-input visually-hidden"/>
              <span className="toppings-mark"></span>
              <span className="toppings-label">Fruits</span>
            </label>
          </li>
          <li className="filters-item">
            <label htmlFor="syrups">
              <input type="checkbox" id="syrups" name="syrups" className="toppings-input visually-hidden"/>
              <span className="toppings-mark"></span>
              <span className="toppings-label">Syrups</span>
            </label>
          </li>
          <li className="filters-item">
            <label htmlFor="jams">
              <input type="checkbox" id="jams" name="jams" className="toppings-input visually-hidden"/>
              <span className="toppings-mark"></span>
              <span className="toppings-label">Jams</span>
            </label>
          </li>
        </ul>
      </fieldset>
      <button className="button button--white sorting-form__submit-btn" type="button" onClick={handleResetForm}>Reset</button>
    </form>
  )
}








  // const dispatch = useDispatch();
  // const shopItems = useSelector((state: RootState) => state.page.catalog);

  // const [sortType, setSortType] = useState<SortTypes>(SortTypes.Popular);
  // const [leftPrice, setLeftPrice] = useState(3.0);
  // const [rightPrice, setRightPrice] = useState(3.5);

  // const [formData, setFormData] = useState({
  //   sorting: SortTypes.Popular,
  //   fat: null,
  //   toppings: null,
  // })

  // const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   const sortBy = event.target.value as SortTypes;
  //   setSortType(sortBy);
  //   dispatch(sortCatalog({ sortBy }));
  // };

  // const handleResetForm = (e: React.FormEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   setFormData({
  //     sorting: SortTypes.Popular,
  //     fat: null,
  //     toppings: null
  //   })
  // }

  // const handleFatsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const fat = Number(event.target.value);
  //   dispatch(filterByFat({ fat }));
  // }

  // function sortByPrice(a: ShopItem, b: ShopItem) {
  //   return a.price - b.price;
  // }
  // const sortedItems = [...shopItems];
  
  // const minPrice = sortedItems.length ? sortedItems.sort(sortByPrice)[0].price : 0;
  // const maxPrice = sortedItems.length ? sortedItems.sort(sortByPrice)[sortedItems.length - 1].price : 0;
  // const priceRange = Math.ceil(maxPrice - minPrice).toFixed(1);
