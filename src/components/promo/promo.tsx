import { promoItems } from "../../mocks/promo";
import { PromoItem } from "./promo-item";
import "../../styles/blocks/promo/promo.sass"

export function Promo(): JSX.Element {
  return (
    <div className="promo">
      <h2>Order ice cream and receive gifts!</h2>
      <ul className="promo__list">
        {
          promoItems.map((item) => {
            return <PromoItem item={item}/>
          })
        }
      </ul>
    </div>
  )
}
