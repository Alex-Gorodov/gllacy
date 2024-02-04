import { promoItems } from "../../mocks/promo";
import { PromoItem } from "./promo-item";

export function Promo(): JSX.Element {
  return (
    <>
      <h2>Order ice cream and receive gifts!</h2>
      {
        promoItems.map((item) => {
          return <PromoItem item={item}/>
        })
      }
    </>
  )
}
