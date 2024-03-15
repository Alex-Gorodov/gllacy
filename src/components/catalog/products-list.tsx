import {ReactComponent as SliderArrowPrev} from '../../img/icons/slider-arrow-prev.svg'
import {ReactComponent as SliderArrowNext} from '../../img/icons/slider-arrow-next.svg'
import { shopItems } from "../../mocks/shopItems";
import { IceCreamTypes } from '../../types/shopItem';
import { Good } from "../home/shop-section/good";
import { useState } from "react";
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

export function ProductsList(): JSX.Element {

  const [page, setPage] = useState(1);
  const [iceCreamType, setIceCreamType] = useState('all');
  const [shownGoods, setShownGoods] = useState(12);
  const [pageNumber, setPageNumber] = useState(Math.round(shopItems.length / 12));
  const pagesAmount = Array.from({ length: pageNumber }, (_, index) => index + 1);
  const iceCreamTypesArray: IceCreamTypes[] = Object.values(IceCreamTypes);
  const changeTypeHandler = (type: string) => {
    setIceCreamType(type);
    setPage(1);
    setPageNumber(
      type === 'all'
        ?
        Math.ceil(shopItems.length / 12)
        :
        Math.ceil(shopItems.filter((item) => item.type === type).length / 12)
    )
  }
  
  return (
    <>
      <>
        <ul className="catalog__breadcrumbs breadcrumbs">
          <li className="breadcrumbs__item">
            <Link className="breadcrumbs__link" to={AppRoute.Root}>Main</Link>
          </li>
          <li className="breadcrumbs__item">
            <Link className="breadcrumbs__link" to={AppRoute.Catalog} onClick={() => setIceCreamType('')}>Catalog</Link>
          </li>
          <li className="breadcrumbs__item">
            <Link className="breadcrumbs__link breadcrumbs__link--active" to="#">{iceCreamType}</Link>
          </li>
        </ul>
        <div className="catalog__types-wrapper">
          {
            iceCreamTypesArray.map((type) => {
              return (
                <Link 
                  className={`catalog__type ${type === iceCreamType ? 'catalog__type--active' : ''}`}
                  to={AppRoute.Catalog}
                  onClick={() => {changeTypeHandler(type)}}
                  key={`type-${type}`}
                >
                  {type}
                </Link>
              )
            })
          }
        </div>
        <h2 className="title title--2 catalog__title">{iceCreamType} Ice Cream</h2>
      </>
      <ul className="products__list">
        {
          iceCreamType === 'all'
          ?
          shopItems.slice(0 + shownGoods * (page - 1), shownGoods * page).map((item) => {
            return (
              <Good item={item} key={item.id}/>
            )
          })
          :
          shopItems.filter((item) => item.type === iceCreamType).slice(0 + shownGoods * (page - 1), shownGoods * page).map((item) => {
            return (
              <Good item={item} key={item.id}/>
            )
          })
        }
      </ul>
      {
        shownGoods &&
        <div className="catalog__buttons-wrapper">
          <button className="button button--white" disabled={shownGoods >= shopItems.length - 1} onClick={() => {setShownGoods(shownGoods + 12); setPageNumber(Math.floor(pagesAmount.length - 1))}}>Show more</button>
          <ul className="catalog-pagination">

            <li>
              <button className="catalog-pagination__btn" onClick={() => setPage(page - 1)} disabled={page <= 1}>
                <SliderArrowPrev/>
              </button>
            </li>
            {pagesAmount.map((pageNumber) => {
              const paginationBtnClassName = cn('catalog-pagination__btn', {
                'catalog-pagination__btn--active' : page === pageNumber
              });
              return (
                <li key={pageNumber}>
                  <button className={paginationBtnClassName} data-pagination={pageNumber} onClick={() => setPage(pageNumber)}>
                    {pageNumber}
                  </button>
                </li>
              );
            })}
            <li>
              <button className="catalog-pagination__btn" onClick={() => setPage(page + 1)} disabled={page >= pageNumber}>
                <SliderArrowNext/>
              </button>
            </li>
          </ul>
        </div>
      }
    </>
  )
}
