import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/RootState";
import cn from 'classnames';
import '../../styles/blocks/cart.sass';
import { removeFromCart, toggleCart } from "../../store/page/page-actions";
import { useResizeListener } from "../../hooks/useResizeListener";

export function Cart(): JSX.Element {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.page.cartItems);
  const isCartOpened = useSelector((state: RootState) => state.page.isCartOpened);
  const cartClassName = cn('cart', {
    'cart--opened': isCartOpened
  });

  const totalCost = cartItems.reduce((acc, item) => acc + (item.amountInCart ? item.amountInCart * item.price : item.price), 0);

  return (
    <div className={cartClassName}>
      <div style={{width: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between'}}>
        <h3 className="cart__title title title--3">Cart</h3>
        {
          useResizeListener() <= 1250 && 
          <button onClick={() => dispatch(toggleCart({isOpened: false}))}>x</button>
        }
      </div>
      <ul className="cart__list">
        {cartItems.map((item) => {
          const itemPrice = item.amountInCart ? item.amountInCart : 1;
          return (
            <li className="cart__item cart-item" key={item._id.$oid}>
              <img src={item.img} alt={item.name} width={46} height={46}/>
              <div className="cart-item__text-wrapper">
                <h4 className="title title--6">{item.name}</h4>
                <p className="cart-item__price">{item.amountInCart} kg x {item.price.toFixed(2)}$</p>
              </div>
              <p className="cart-item__cost">{(itemPrice * item.price).toFixed(2)} $</p>
              <button className="cart-item__remove-btn" onClick={() => dispatch(removeFromCart({ item }))}>x</button>
            </li>
          );
        })}
      </ul>
      <div className="cart__checkout">
        <button className="button button--red">Checkout</button>
        <p className="title title--6">Total: {totalCost.toFixed(2)} $</p>
      </div>
    </div>
  );
}
