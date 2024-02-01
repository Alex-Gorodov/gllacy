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
import { useState } from 'react'
import cn from 'classnames'

export function Header(): JSX.Element{
  const [isMenuOpened, setMenuOpened] = useState(false);
  const burgerBtnClassName = cn('burger-btn__line', {
    'burger-btn__line--active' : isMenuOpened
  })
  const mobileHeaderClassName = cn('header__wrapper', {
    'header__wrapper--opened' : isMenuOpened
  })

  return (
    <header className="header">
      <Link to={AppRoute.Root} className="navigation__logo">
        <Logo />
      </Link>
      <div className={mobileHeaderClassName}>
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
          <button className="user-navigation__btn button">
            <CartIcon/>
            Cart
          </button>
        </div>
      </div>
      {
        useResizeListener() > 1250
        ?
        ''
        :
        <button className="header__burger burger-btn" onClick={() => setMenuOpened(!isMenuOpened)}>
          <span className={burgerBtnClassName}></span>
        </button>
      }
    </header>
  )
}