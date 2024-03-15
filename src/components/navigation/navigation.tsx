import { Link, useLocation } from "react-router-dom";
import { AppRoute } from "../../const";
import { useState, useEffect } from "react";
import cn from 'classnames';
import { useResizeListener } from "../../hooks/useResizeListener";
import { IceCreamTypes } from "../../types/shopItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/RootState";
import { setCatalogType } from "../../store/page/page-actions";

export function Navigation(): JSX.Element {
  const location = useLocation();
  const [activePage, setActivePage] = useState<string | null>(null);
  const iceCreamTypesArray: IceCreamTypes[] = Object.values(IceCreamTypes);
  const catalogType = useSelector((state: RootState) => state.page.catalogType);
  const dispatch = useDispatch();
  const [typesShowed, setTypesShowed] = useState(false);

  useEffect(() => {
    const pathname = location.pathname;
    if (pathname === AppRoute.Catalog ||
        pathname === AppRoute.Shipping ||
        pathname === AppRoute.About) {
      setActivePage(pathname);
    } else {
      setActivePage(null);
    }
  }, [location.pathname]);

  const pageClassName = (page: string) =>
    cn('navigation__link', {
      'navigation__link--active': activePage === page,
    });

  const catalogTypeChangeHandler = (type: IceCreamTypes) => {
    dispatch(setCatalogType({type: type}));
    setTypesShowed(false);
  }

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {
          useResizeListener() < 1250 &&
          <li className="navigation__item">
            <Link to={AppRoute.Root} className={pageClassName(AppRoute.Root)}>Home</Link>
          </li>
        }
        <li className="navigation__item">
          <Link
            to={AppRoute.Catalog}
            className={pageClassName(AppRoute.Catalog)}
            onMouseEnter={() => setTypesShowed(!typesShowed)}
          >
            Catalog
          </Link>
            {
              typesShowed &&
              <div className="catalog__types-wrapper">
                {
                  iceCreamTypesArray.map((type) => {
                    return (
                      <Link 
                        className={`catalog__type ${type === catalogType ? 'catalog__type--active' : ''}`}
                        to={AppRoute.Catalog}
                        onClick={() => catalogTypeChangeHandler(type)}
                        key={`type-${type}`}
                      >
                        {type}
                      </Link>
                    )
                  })
                }
              </div>
            }
        </li>
        <li className="navigation__item">
          <Link to={AppRoute.Shipping} className={pageClassName(AppRoute.Shipping)}>Shipping and payment</Link>
        </li>
        <li className="navigation__item">
          <Link to={AppRoute.About} className={pageClassName(AppRoute.About)}>About company</Link>
        </li>
        <li className="navigation__item navigation__item--phone">
          <Link to="tel:041234567" className="navigation__link">(04) 123-4567</Link>
        </li>
      </ul>
    </nav>
  );
}
