import {ReactComponent as SearchIcon} from './../../img/icons/search.svg'
import {ReactComponent as LoginIcon} from './../../img/icons/login.svg'
import {ReactComponent as CartIcon} from './../../img/icons/cart.svg'
import { useResizeListener } from '../../hooks/useResizeListener'
import { ReactComponent as Logo } from './../../logo.svg';
import { Navigation } from '../navigation/navigation'
import { Link } from 'react-router-dom'
import { AppRoute, MOBILE_WIDTH, OVERFLOW_WIDTH } from '../../const'
import { Cart } from '../cart/cart';
import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/RootState';
import { toggleCart, toggleMobileMenu, toggleSearch } from '../../store/page/page-actions';
import { Search } from '../search/search';

type HeaderProps = {
  hasNav?: boolean;
}

export function Header({hasNav}: HeaderProps): JSX.Element{
  const isSearchOpened = useSelector((state: RootState) => state.page.isSearchOpened);
  const isMenuOpened = useSelector((state: RootState) => state.page.isMenuOpened);
  const isCartOpened = useSelector((state: RootState) => state.page.isCartOpened);
  const cartItems = useSelector((state: RootState) => state.page.cartItems);
  const isShortNames = useResizeListener() > OVERFLOW_WIDTH;
  const isMobileSize = useResizeListener() < MOBILE_WIDTH;
  const dispatch = useDispatch();

  const openModal = () => {

  }

  const burgerBtnClassName = cn('burger-btn__line', {
    'burger-btn__line--active' : isMenuOpened
  })
  const mobileHeaderWrapperClassName = cn('header__wrapper', {
    'header__wrapper--opened' : isMenuOpened
  })

  isMenuOpened ? document.body.style.overflow = 'hidden' : document.body.style.overflow = ''

  return (
    <header className="header">
      <Link to={AppRoute.Root} className="navigation__logo">
        <Logo />
        <span className="visually-hidden">Go to home page</span>
      </Link>
      {hasNav && <div className={mobileHeaderWrapperClassName}>
        <Navigation/>
        <div className="header__user-nav user-navigation">
          <button className="user-navigation__btn button button--circle" onClick={() => {
            dispatch(toggleSearch({isOpened: !isSearchOpened}));
            dispatch(toggleCart({isOpened: false}))
            isMobileSize && dispatch(toggleMobileMenu({isOpened: !isMenuOpened}));
          }}>
            <SearchIcon/>
            <span className="visually-hidden">Search</span>
          </button>
          {
            isSearchOpened && <Search/>
          }
          <button className="user-navigation__btn button" disabled>
            <LoginIcon/>
            {
              isShortNames ? 'Enter' : ''
            }
            <span className="visually-hidden">Login</span>
          </button>
          <button className="user-navigation__btn button" onClick={() => {
            isMobileSize && dispatch(toggleMobileMenu({isOpened: !isMenuOpened}))
            dispatch(toggleCart({isOpened: !isCartOpened}))
            dispatch(toggleSearch({isOpened: false}))
          }}>
            <CartIcon/>
            {
              isShortNames
              ?
              cartItems.length > 0 ? `${cartItems.length} items` : 'Empty'
              :
              ''
            }
            <span className="visually-hidden">Cart</span>
          </button>
          <Cart/>
        </div>
      </div>
      }
      {
        !isMobileSize && hasNav
        ?
        ''
        :
        <button className="header__burger burger-btn" onClick={() => {
          dispatch(toggleMobileMenu({isOpened: !isMenuOpened}))
          dispatch(toggleCart({isOpened: false}))
          dispatch(toggleSearch({isOpened: false}))
        }
        }>
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
