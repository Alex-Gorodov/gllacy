import {ReactComponent as CartIcon} from './../../../img/icons/product-cart.svg'
import { ShopItem } from "../../../types/shopItem"

type ShopItemProps = {
  item: ShopItem;
}

export function Good({item}: ShopItemProps): JSX.Element {
  return (
    <li className="products__item product" key={item._id.$oid}>
      <img className="product__image" src={item.img} alt={item.name} width={168} height={168}/>
      <h4 className="title title--4">{item.name}</h4>
      <p className="product__description">{item.description}</p>
      <div className="product__price-wrapper">
        <strong className="product__price">{item.price.toFixed(2)} $/kg</strong>
        <button className="product__btn">
          <CartIcon/>  
        </button>
      </div>
    </li>
  )
}
