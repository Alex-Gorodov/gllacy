import {ReactComponent as CartIcon} from './../../../img/icons/product-cart.svg'
import { ShopItem } from "../../../types/shopItem"
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store/page/page-actions';
import { useResizeListener } from '../../../hooks/useResizeListener';
import { MOBILE_WIDTH } from '../../../const';

type ShopItemProps = {
  item: ShopItem;
}

export function Good({item}: ShopItemProps): JSX.Element {
  const dispatch = useDispatch();
  const imageSize = useResizeListener() <= MOBILE_WIDTH ? 120 : 168;

  return (
    <li className="products__item product" key={item.id}>
      <img className="product__image" src={item.img} alt={item.name} width={imageSize} height={imageSize}/>
      <p className="title title--4 product__title">{item.name}</p>
      <p className="product__description">{item.description}</p>
      <div className="product__price-wrapper">
        <strong className="product__price">{item.price.toFixed(2)} $/kg</strong>
        <button className="product__btn" onClick={() => dispatch(addToCart({item: {...item, amountInCart: 1}}))} title={`Add 1/2 kg of ${item.name} to cart`}>
          <CartIcon/>  
        </button>
      </div>
    </li>
  )
}
