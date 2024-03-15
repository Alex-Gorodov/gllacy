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
  const [iceCreamType, setIceCreamType] = useState(IceCreamTypes.All);
  const [shownGoods, setShownGoods] = useState(12);
  const [pagesNum, setPagesNum] = useState(Math.round(shopItems.length / shownGoods));
  const pagesAmount = Array.from({ length: Math.ceil(iceCreamType === IceCreamTypes.All ? shopItems.length / shownGoods : pagesNum) }, (_, index) => index + 1);
  const iceCreamTypesArray: IceCreamTypes[] = Object.values(IceCreamTypes);

  const changeTypeHandler = (type: IceCreamTypes) => {
    setIceCreamType(type);
    setPage(1);
    setShownGoods(12);
    const filteredItems = shopItems.filter((item) => item.type === type);
    setPagesNum(Math.ceil(filteredItems.length / shownGoods));
  };

  return (
    <>
      <>
        <ul className="catalog__breadcrumbs breadcrumbs">
          <li className="breadcrumbs__item">
            <Link className="breadcrumbs__link" to={AppRoute.Root}>Main</Link>
          </li>
          <li className="breadcrumbs__item">
            <Link className="breadcrumbs__link" to={AppRoute.Catalog} onClick={() => setIceCreamType(IceCreamTypes.All)}>Catalog</Link>
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
          iceCreamType === IceCreamTypes.All
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
          <button
            className="button button--white"
            disabled={pagesAmount.length < 2}
            onClick={() => {
              setShownGoods(shownGoods + 12);
              const filteredItems = shopItems.filter((item) => item.type === iceCreamType);
              console.log(filteredItems.length);
              
              setPagesNum(Math.ceil(filteredItems.length / (shownGoods + 12)));
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
