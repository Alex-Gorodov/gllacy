


import { ReactComponent as CartIcon } from './../../img/icons/cart.svg'
import { ReactComponent as SuccessIcon } from './../../img/icons/success.svg'
import { ShopItem } from "../../types/shopItem"
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/page/page-actions';
import { useResizeListener } from '../../hooks/useResizeListener';
import { MOBILE_WIDTH, SPINNER_TIMEOUT } from '../../const';
import { useState } from 'react';
import { Spinner } from '../spinner/spinner';

type ShopItemProps = {
  item: ShopItem;
}

export function ProductCard({item}: ShopItemProps): JSX.Element {
  const dispatch = useDispatch();
  const isMobile = useResizeListener() <= MOBILE_WIDTH;
  const imageSize = isMobile ? 120 : 168;
  const [isAdded, setAdded] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    setLoading(true);
    dispatch(addToCart({item: {...item, amountInCart: 1}}));
    setTimeout(() => {
      setLoading(false);
      setAdded(true);
      setTimeout(() => {
        setAdded(false);
      }, SPINNER_TIMEOUT);
    }, SPINNER_TIMEOUT);
  };

  return (
    <li className="products__item product" key={item.id}>
      <img className="product__image" src={item.img} alt={item.name} width={imageSize} height={imageSize}/>
      <p className="title title--4 product__title">{item.name}</p>
      <p className="product__description">{item.description}</p>
      <div className="product__price-wrapper">
        <strong className="product__price">{item.price.toFixed(2)} $/kg</strong>
        <button
          className="product__btn"
          type="button"
          onClick={handleAddToCart} disabled={isLoading || isAdded}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          >
            {isLoading && <Spinner size={"18"} color={ isHovered ? "#ff2f64" : "#e7e7e7" } />}
            {!isLoading && isAdded && <SuccessIcon/>}
            {!isLoading && !isAdded && <CartIcon/>}
            <span className="visually-hidden">{`Add 1/2 kg of ${item.name} to cart`}</span>
        </button>
      </div>
    </li>
  )
}
