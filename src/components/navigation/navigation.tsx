import { Link, useLocation } from "react-router-dom";
import { AppRoute, IceCreamTypes, MOBILE_WIDTH } from "../../const";
import { useState, useEffect } from "react";
import cn from 'classnames';
import { useResizeListener } from "../../hooks/useResizeListener";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/RootState";
import { setCatalogType, toggleMobileMenu } from "../../store/page/page-actions";

export function Navigation(): JSX.Element {
  const location = useLocation();
  const [activePage, setActivePage] = useState<string | null>(null);
  const iceCreamTypesArray: IceCreamTypes[] = Object.values(IceCreamTypes);
  const catalogType = useSelector((state: RootState) => state.page.catalogType);
  const dispatch = useDispatch();
  const [typesShowed, setTypesShowed] = useState(false);
  const isMobile = useResizeListener() <= MOBILE_WIDTH;

  useEffect(() => {
    const pathname = location.pathname;
    if (pathname === AppRoute.Catalog ||
        pathname === AppRoute.Shipping ||
        pathname === AppRoute.About) {
      setActivePage(pathname);
    } else if (pathname === AppRoute.CatalogCreamy || pathname === AppRoute.CatalogSorbet) {
      setActivePage(AppRoute.Catalog)
    } else {
      setActivePage(null);
    }
  }, [location.pathname]);

  const pageClassName = (page: string) =>
    cn('navigation__link', {
      'navigation__link--active': activePage === page,
    });


  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {
          isMobile &&
          <li className="navigation__item">
            <Link to={AppRoute.Root} className={pageClassName(AppRoute.Root)} onClick={() => {
              isMobile && dispatch(toggleMobileMenu({isOpened: false}));
            }}>Home</Link>
          </li>
        }
        <li className="navigation__item"
          onMouseEnter={() => setTypesShowed(true)}
          onMouseLeave={() => setTypesShowed(false)}
        >
          <Link
            to={AppRoute.Catalog}
            className={pageClassName(AppRoute.Catalog)}
            onClick={() => {
              isMobile && dispatch(toggleMobileMenu({isOpened: false}));
              dispatch(setCatalogType({type: IceCreamTypes.All}));
              if (typesShowed) setTypesShowed(false);
            }}
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
                        to={
                          type === IceCreamTypes.All
                          ? AppRoute.Catalog
                          :
                          `${AppRoute.Catalog}/${type}`
                        }
                        onClick={() => {
                          dispatch(setCatalogType({type: type}));
                          isMobile && dispatch(toggleMobileMenu({isOpened: false}));
                          setTypesShowed(false);
                        }}
                        onMouseLeave={() => setTypesShowed(false)}
                        onMouseEnter={() => setTypesShowed(true)}
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
          <Link to={AppRoute.Shipping} className={pageClassName(AppRoute.Shipping)} onClick={() => {
            isMobile && dispatch(toggleMobileMenu({isOpened: false}))
          }}>Shipping and payment</Link>
        </li>
        <li className="navigation__item">
          <Link to={AppRoute.About} className={pageClassName(AppRoute.About)} onClick={() => {
            isMobile && dispatch(toggleMobileMenu({isOpened: false}))
          }}>About company</Link>
        </li>
        <li className="navigation__item navigation__item--phone">
          <Link to="tel:041234567" className="navigation__link">(04) 123-4567</Link>
        </li>
      </ul>
    </nav>
  );
}
