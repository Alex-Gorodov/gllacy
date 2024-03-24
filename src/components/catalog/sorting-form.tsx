import { shopItems } from "../../mocks/shopItems"
import { ShopItem } from "../../types/shopItem";

export function SortingForm(): JSX.Element {
  function sortByPrice(a: ShopItem, b: ShopItem) {
    return a.price - b.price;
  }
  const minPrice = shopItems.sort(sortByPrice)[0].price;
  const maxPrice = shopItems.sort(sortByPrice)[shopItems.length - 1].price;


  return (
    <form className="sorting-form" action="https://echo.htmlacademy.ru/" method="get">
      <fieldset className="sort-item">
        <label className="sorting-label" htmlFor="sorting-by">Sorting by:</label>
        <select name="sort by" id="sorting-by">
          <option value="Popular">by popular</option>
          <option value="Price">by price</option>
          <option value="Fats">by fats</option>
        </select>
      </fieldset>
      <fieldset className="sort-item">
        <label className="sorting-label" htmlFor="price">Price: 3.0 $ – 3.5 $</label>
        <div className="range-wrapper">
          <span className="range-scale"></span>
          {/* <input type="range" name="range-scale" id="range-scale" min={minPrice} max={maxPrice} step={0.1}/> */}
          <div className="range-bar">
            <div className="range-toggle-wrapper left-toggle">
              <button className="range-toggle toggle-min" type="button">
                <span className="visually-hidden">Change minimal price.</span>
              </button>
              <label className="range-label min-label" htmlFor="lowest-price"></label>
            </div>
            <div className="range-toggle-wrapper right-toggle">
              <button className="range-toggle toggle-max" type="button">
                <span className="visually-hidden">Change maximal price.</span>
              </button>
              <label className="range-label max-label" htmlFor="highest-price"></label>
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset className="sort-item">
        <label className="sorting-label" htmlFor="price">Fat:</label>
        <ul className="fat-list">
          <li className="filters-item">
            <label htmlFor="zero-fats">
              <input type="radio" id="zero-fats" value="0 percent" name="percent of fat" className="fats-input visually-hidden"/>
              <span className="fats-mark"></span>
              <span className="fats-label">0%</span>
            </label>
          </li>
          <li className="filters-item">
            <label htmlFor="under-ten-fats">
              <input type="radio" id="under-ten-fats" value="under 10 percent" name="percent of fat" className="fats-input visually-hidden"/>
              <span className="fats-mark"></span>
              <span className="fats-label">Under 10%</span>
            </label>
          </li>
          <li className="filters-item">
            <label htmlFor="under-thirty-fats">
              <input type="radio" id="under-thirty-fats" value="under 30 percent" name="percent of fat" className="fats-input visually-hidden"/>
              <span className="fats-mark"></span>
              <span className="fats-label">Under 30%</span>
            </label>
          </li>
          <li className="filters-item">
            <label htmlFor="above-thirty-fats">
              <input type="radio" id="above-thirty-fats" value="above 30 percent" name="percent of fat" className="fats-input visually-hidden"/>
              <span className="fats-mark"></span>
              <span className="fats-label">Above 30%</span>
            </label>
          </li>
        </ul>
      </fieldset>
      <fieldset className="sort-item">
        <label className="sorting-label" htmlFor="price">Toppings:</label>
        <ul className="toppings-list">
          <li className="filters-item">
            <label htmlFor="chocolate">
              <input type="checkbox" id="chocolate" name="chocolate" className="toppings-input visually-hidden" checked/>
              <span className="toppings-mark"></span>
              <span className="toppings-label">Chocolate</span>
            </label>
          </li>
          <li className="filters-item">
            <label htmlFor="sugar-sprinkles">
              <input type="checkbox" id="sugar-sprinkles" name="sugar sprinkles" className="toppings-input visually-hidden" checked/>
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
      <button className="button button--white" type="submit">Submit</button>
    </form>
  )
}
