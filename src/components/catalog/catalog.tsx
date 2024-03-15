import {ReactComponent as SliderArrowPrev} from '../../img/icons/slider-arrow-prev.svg'
import {ReactComponent as SliderArrowNext} from '../../img/icons/slider-arrow-next.svg'
import { shopItems } from "../../mocks/shopItems";
import { IceCreamTypes } from '../../types/shopItem';
import { Good } from "../home/shop-section/good";
import { useState } from "react";
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/RootState';
import { setCatalogType } from '../../store/page/page-actions';

export function Catalog(): JSX.Element {

  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const iceCreamType = useSelector((state: RootState) => state.page.catalogType);
  const [itemsByPage, setItemsByPage] = useState(12);
  const [pagesNum, setPagesNum] = useState(Math.round(
    iceCreamType === IceCreamTypes.All
    ?
    Math.ceil(shopItems.length / itemsByPage)
    :
    Math.ceil(shopItems.filter((item) => item.type === iceCreamType).length / itemsByPage)
  ));

  const pagesAmount = Array.from({ length: Math.ceil(iceCreamType === IceCreamTypes.All ? shopItems.length / itemsByPage : pagesNum) }, (_, index) => index + 1);

  return (
    <>
      <ul className="catalog__breadcrumbs breadcrumbs">
        <li className="breadcrumbs__item">
          <Link className="breadcrumbs__link" to={AppRoute.Root}>Main</Link>
        </li>
        <li className="breadcrumbs__item">
          <Link className="breadcrumbs__link" to={AppRoute.Catalog} onClick={() => dispatch(setCatalogType({type: IceCreamTypes.All}))}>Catalog</Link>
        </li>
        <li className="breadcrumbs__item">
          <Link className="breadcrumbs__link breadcrumbs__link--active" to="#">{iceCreamType}</Link>
        </li>
      </ul>
      <h2 className="title title--2 catalog__title">{iceCreamType} Ice Cream</h2>
      <ul className="products__list">
        {
          iceCreamType === IceCreamTypes.All
          ?
          shopItems.slice(itemsByPage * (page - 1), itemsByPage * page).map((item) => {
            return (
              <Good item={item} key={item.id}/>
            )
          })
          :
          shopItems.filter((item) => item.type === iceCreamType).slice(itemsByPage * (page - 1), itemsByPage * page).map((item) => {
            return (
              <Good item={item} key={item.id}/>
            )
          })
        }
      </ul>
      {
        itemsByPage &&
        <div className="catalog__buttons-wrapper">
          <button
            className="button button--white"
            disabled={pagesAmount.length < 2}
            onClick={() => {
              setItemsByPage(itemsByPage + 12);
              const filteredItems = shopItems.filter((item) => item.type === iceCreamType);
              setPagesNum(Math.ceil(filteredItems.length / (itemsByPage + 12)));
            }}
          >
            Show more
          </button>
          <ul className="catalog-pagination">

            <li>
              <button className="catalog-pagination__btn" onClick={() => setPage(page - 1)} disabled={page <= 1}>
                <SliderArrowPrev/>
              </button>
            </li>
            {
              pagesAmount.map((pageNumber) => {
                const paginationBtnClassName = cn('catalog-pagination__btn', {
                  'catalog-pagination__btn--active': page === pageNumber
                });
                return (
                  <li key={`page-${pageNumber}`}>
                    <button
                      className={paginationBtnClassName}
                      data-pagination={pageNumber}
                      onClick={() => setPage(pageNumber)}
                    >
                      {pageNumber}
                    </button>
                  </li>
                );
              })
            }
            <li>
              <button className="catalog-pagination__btn" onClick={() => setPage(page + 1)} disabled={page >= pagesNum}>
                <SliderArrowNext/>
              </button>
            </li>
          </ul>
        </div>
      }
    </>
  )
}
