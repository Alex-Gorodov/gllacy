import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/RootState";
import cn from 'classnames';
import { removeFromCart, toggleCart } from "../../store/page/page-actions";
import { ReactComponent as CloseCross} from '../../img/icons/cross.svg';
import { useOutsideClick } from "../../hooks/useOutsideClick";

export function Cart(): JSX.Element {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.page.cartItems);
  const isCartOpened = useSelector((state: RootState) => state.page.isCartOpened);

  const cartClassName = cn('cart', {
    'cart--opened': isCartOpened,
    'cart--empty': cartItems.length === 0
  });

  const cartWrapperRef = useOutsideClick(() => {
    dispatch(toggleCart({ isOpened: false }));
  }) as React.RefObject<HTMLDivElement>;

  const totalCost = cartItems.reduce((acc, item) => acc + (item.amountInCart ? item.amountInCart * item.price : item.price), 0);

  return (
    <div className={cartClassName} ref={cartWrapperRef}>
      {cartItems.length < 1 ? (
        <>
          <h6 className="cart__title title title--6">Your cart is currently empty</h6>
          <button className="cart__close-btn" onClick={() => dispatch(toggleCart({ isOpened: false }))}>
            <CloseCross />
          </button>
        </>
      ) : (
        <>
          <div className="cart__top-wrapper">
            <h3 className="cart__title title title--3">Cart</h3>
            <button className="cart__close-btn" onClick={() => dispatch(toggleCart({ isOpened: false }))}>
              <CloseCross />
            </button>
          </div>
          <ul className="cart__list">
            {cartItems.map((item) => {
              const itemPrice = item.amountInCart ? item.amountInCart : 1;

              return (
                <li className="cart__item cart-item" key={item.id}>
                  <img src={item.img} alt={item.name} width={46} height={46} />
                  <div className="cart-item__text-wrapper">
                    <h4 className="title title--6">{item.name}</h4>
                    <p className="cart-item__price">{item.amountInCart} kg x {item.price.toFixed(2)}$</p>
                  </div>
                  <p className="cart-item__cost">{(itemPrice * item.price).toFixed(2)} $</p>
                  <button className="cart-item__remove-btn" onClick={() => dispatch(removeFromCart({ item }))}>
                    <CloseCross />
                    <span className="visually-hidden">close cart</span>
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="cart__checkout">
            <button className="button button--red">Checkout</button>
            <p className="title title--6">Total: {totalCost.toFixed(2)} $</p>
          </div>
        </>
      )}
    </div>
  );
}
