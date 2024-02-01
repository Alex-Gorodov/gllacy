import { Link, useLocation } from "react-router-dom";
import { AppRoute } from "../../const";
import '../../styles/blocks/navigation.sass';
import { useState, useEffect } from "react";
import cn from 'classnames';
import { useResizeListener } from "../../hooks/useResizeListener";

export function Navigation(): JSX.Element {
  const location = useLocation();
  const [activePage, setActivePage] = useState<string | null>(null);

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
          <Link to={AppRoute.Catalog} className={pageClassName(AppRoute.Catalog)}>Catalog</Link>
        </li>
        <li className="navigation__item">
          <Link to={AppRoute.Shipping} className={pageClassName(AppRoute.Shipping)}>Shipping and payment</Link>
        </li>
        <li className="navigation__item">
          <Link to={AppRoute.About} className={pageClassName(AppRoute.About)}>About company</Link>
        </li>
        <li className="navigation__item navigation__item--phone">
          <Link to="tel:88005558628" className="navigation__link">+7 800 555-86-28</Link>
        </li>
      </ul>
    </nav>
  );
}
