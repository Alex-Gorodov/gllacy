import { promoItems } from "../../mocks/promo";
import { PromoItem } from "./promo-item";

export function Promo(): JSX.Element {
  return (
    <section className="promo section">
      <h2 className="title title--2 title--section">Order ice cream and receive gifts!</h2>
      <ul className="promo__list">
        {
          promoItems.map((item) => {
            return <PromoItem item={item} key={item.title}/>
          })
        }
      </ul>
    </section>
  )
}
