import {ReactComponent as SliderArrowPrev} from '../../img/icons/slider-arrow-prev.svg'
import {ReactComponent as SliderArrowNext} from '../../img/icons/slider-arrow-next.svg'
import { shopItems } from "../../mocks/shopItems";
import { IceCreamTypes } from '../../types/shopItem';
import { Good } from "../home/shop-section/good";
import { useEffect, useState } from "react";
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { AppRoute, ITEMS_BY_PAGE, SPINNER_TIMEOUT } from '../../const';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/RootState';
import { Spinner } from '../spinner/spinner';
import { SortingForm } from './sorting-form';
import { setCatalogType } from '../../store/page/page-actions';

export function Catalog(): JSX.Element {

  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const iceCreamType = useSelector((state: RootState) => state.page.catalogType);
  const [isLoading, setIsLoading] = useState(false);
  const [itemsByPage, setItemsByPage] = useState(ITEMS_BY_PAGE);
  const [pagesNum, setPagesNum] = useState(Math.round(
    iceCreamType === IceCreamTypes.All
    ?
    Math.ceil(shopItems.length / itemsByPage)
    :
    Math.ceil(shopItems.filter((item) => item.type === iceCreamType).length / itemsByPage)
  ));

  const pagesAmount = Array.from({ length: Math.ceil(iceCreamType === IceCreamTypes.All ? shopItems.length / itemsByPage : Math.ceil((shopItems.filter((item) => item.type === iceCreamType).length) / 12)) }, (_, index) => index + 1);

  useEffect(() => {
    setPage(1)
    setItemsByPage(ITEMS_BY_PAGE)
  }, [iceCreamType])

  return (
    <>
      <ul className="catalog__breadcrumbs breadcrumbs">
        <li className="breadcrumbs__item">
          <Link className="breadcrumbs__link" to={AppRoute.Root}>Main</Link>
        </li>
        <li className="breadcrumbs__item">
          <Link className="breadcrumbs__link" to={AppRoute.Catalog} onClick={() => {
            dispatch(setCatalogType({type: IceCreamTypes.All}))
          }}>Catalog</Link>
        </li>
        <li className="breadcrumbs__item">
          <Link className="breadcrumbs__link breadcrumbs__link--active" to="#">{iceCreamType}</Link>
        </li>
      </ul>
      <h2 className="title title--2 catalog__title">{iceCreamType} Ice Cream</h2>
      <SortingForm/>
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
            className="button button--white catalog__load-btn"
            disabled={pagesAmount.length < 2}
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false);
                setItemsByPage(itemsByPage + ITEMS_BY_PAGE);
                const filteredItems = shopItems.filter((item) => item.type === iceCreamType);
                setPagesNum(Math.ceil(filteredItems.length / (itemsByPage + ITEMS_BY_PAGE)));
              }, SPINNER_TIMEOUT);
            }}
          >
            Show more
            {
              isLoading && 
              <span className='catalog__spinner'>
                <Spinner size='20' color='#2d3440'/>
              </span>
            }
          </button>
          <ul className="catalog-pagination">
            {
              pagesAmount.length > 5 &&
              <li>
                <button className="catalog-pagination__btn" onClick={() => setPage(page - 1)} disabled={page <= 1}>
                  <SliderArrowPrev/>
                </button>
              </li>
            }
            {
              page < 5
              ?
              pagesAmount.slice(0,5)
              .map((pageNumber) => {
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
              :
              pagesAmount.slice(pagesNum - 5, pagesNum).map((pageNumber) => {
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
            {
              pagesAmount.length > 5 &&
              <li>
                <button className="catalog-pagination__btn" onClick={() => setPage(page + 1)} disabled={page >= Math.ceil((shopItems.filter((item) =>
                  iceCreamType === IceCreamTypes.All ?
                  shopItems.length / 12
                  :
                  item.type === iceCreamType).length) / 12
                )
                }>
                  <SliderArrowNext/>
                </button>
              </li>
            }
          </ul>
        </div>
      }
    </>
  )
}
