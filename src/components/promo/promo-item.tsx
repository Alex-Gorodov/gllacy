import { Promo } from "../../types/promo";

type PromoItemProps = {
  item: Promo;
}

export function PromoItem({item}: PromoItemProps): JSX.Element {
  return (
    <div className="promo">
      <h3 className="promo__title">{item.title}</h3>
      <p className="promo__description">{item.description}</p>
      <img src={item.image} alt={item.title} />
    </div>
  )
}
