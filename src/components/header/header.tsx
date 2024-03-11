import {ReactComponent as SearchIcon} from './../../img/icons/search.svg'
import {ReactComponent as LoginIcon} from './../../img/icons/login.svg'
import {ReactComponent as CartIcon} from './../../img/icons/cart.svg'
import { useResizeListener } from '../../hooks/useResizeListener'
import { ReactComponent as Logo } from './../../logo.svg';
import { Navigation } from '../navigation/navigation'
import '../../styles/blocks/user-navigation.sass'
import '../../styles/blocks/burger-btn.sass'
import '../../styles/blocks/button.sass'
import '../../styles/blocks/header.sass'
import { Link } from 'react-router-dom'
import { AppRoute } from '../../const'
import { Cart } from '../cart/cart';
import { useState } from 'react'
import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/RootState';
import { toggleCart } from '../../store/page/page-actions';

type HeaderProps = {
  hasNav?: boolean;
}

export function Header({hasNav}: HeaderProps): JSX.Element{
  const dispatch = useDispatch();
  const [isMenuOpened, setMenuOpened] = useState(false);
  const cartItems = useSelector((state: RootState) => state.page.cartItems);
  const burgerBtnClassName = cn('burger-btn__line', {
    'burger-btn__line--active' : isMenuOpened
  })
  const mobileHeaderWrapperClassName = cn('header__wrapper', {
    'header__wrapper--opened' : isMenuOpened
  })
  const isCartOpened = useSelector((state: RootState) => state.page.isCartOpened);

  isMenuOpened ? document.body.style.overflow = 'hidden' : document.body.style.overflow = ''

  return (
    <header className="header">
      <Link to={AppRoute.Root} className="navigation__logo">
        <Logo />
      </Link>
      {hasNav && <div className={mobileHeaderWrapperClassName}>
        <Navigation/>
        <div className="header__user-nav user-navigation">
          <button className="user-navigation__btn button button--circle">
            <SearchIcon/>
            <span className="visually-hidden">Search</span>
          </button>
          <button className="user-navigation__btn button">
            <LoginIcon/>
            Enter
          </button>
          <button className="user-navigation__btn button" onClick={() => {
            dispatch(toggleCart({isOpened: !isCartOpened}))
            setMenuOpened(false)
            }}>
            <CartIcon/>
            {
              cartItems.length > 0 ? `${cartItems.length} items` : 'Empty'
            }
          </button>
          <Cart/>
        </div>
      </div>}
      {
        useResizeListener() > 1250 && hasNav
        ?
        ''
        :
        <button className="header__burger burger-btn" onClick={() => setMenuOpened(!isMenuOpened)}>
          <span className={burgerBtnClassName}></span>
          <span className="visually-hidden">
            {
              isMenuOpened ? 'close menu' : 'open menu'
            }
          </span>
        </button>
      }
    </header>
  )
}
