import {ReactComponent as CartIcon} from './../../../img/icons/product-cart.svg'
import { ShopItem } from "../../../types/shopItem"
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store/page/page-actions';
import { useResizeListener } from '../../../hooks/useResizeListener';
import { MOBILE_WIDTH } from '../../../const';
import { useState } from 'react';
import { Spinner } from '../../spinner/spinner';

type ShopItemProps = {
  item: ShopItem;
}

export function Good({item}: ShopItemProps): JSX.Element {
  const dispatch = useDispatch();
  const isMobile = useResizeListener() <= MOBILE_WIDTH;
  const imageSize = isMobile ? 120 : 168;
  const [isAdded, setAdded] = useState(false);

  return (
    <li className="products__item product" key={item.id}>
      <img className="product__image" src={item.img} alt={item.name} width={imageSize} height={imageSize}/>
      <p className="title title--4 product__title">{item.name}</p>
      <p className="product__description">{item.description}</p>
      <div className="product__price-wrapper">
        <strong className="product__price">{item.price.toFixed(2)} $/kg</strong>
        <button className="product__btn" type="button" onClick={() => {
          dispatch(addToCart({item: {...item, amountInCart: 1}}));
          setAdded(true);
          setTimeout(() => {
            setAdded(false);
          }, 2500);
          }}
          title={`Add 1/2 kg of ${item.name} to cart`}
        >
          {
            isMobile && isAdded
              ?
              <Spinner size={"18"} color={"#ff2f64"}/>
              :
              <CartIcon/>
          }
          <span className="visually-hidden">{`Add 1/2 kg of ${item.name} to cart`}</span>
        </button>
      </div>
    </li>
  )
}
