import { promoItems } from "../../mocks/promo";
import "../../styles/blocks/promo/promo.sass"
import "../../styles/blocks/section.sass"
import { PromoItem } from "./promo-item";

export function Promo(): JSX.Element {
  return (
    <section className="promo section">
      <h2 className="section__title">Order ice cream and receive gifts!</h2>
      <ul className="promo__list">
        {
          promoItems.map((item) => {
            return <PromoItem item={item}/>
          })
        }
      </ul>
    </section>
  )
}
