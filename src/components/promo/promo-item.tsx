import { Promo } from "../../types/promo";
import "../../styles/blocks/promo/promo-item.sass"

type PromoItemProps = {
  item: Promo;
}

export function PromoItem({item}: PromoItemProps): JSX.Element {
  return (
    <li className="promo__item promo-item">
      <h3 className="promo-item__title">{item.title}</h3>
      <p className="promo-item__description">{item.description}</p>
      <img className="promo-item__image" src={item.image} alt={item.title} width={item.imageSize[0]} height={item.imageSize[1]}/>
      <button className="promo-item__btn">I want a present</button>
    </li>
  )
}
