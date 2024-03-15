import { shopItems } from "../../../mocks/shopItems";
import { Good } from "./good";

export function ShopSection(): JSX.Element {
  return (
    <section className="products section">
      <h2 className="title title--2 title--section products__title">Try our most popular ice cream flavors</h2>
      <ul className="products__list">
        {
          shopItems.slice(0,4).map((item) => {
            return (
              <Good item={item} key={item.id}/>
            )
          })
        }
      </ul>
    </section>
  )
}
