import { useState } from "react";
import { shopItems } from "../../mocks/shopItems";
import { Good } from "../home/shop-section/good";
import cn from 'classnames';
import {ReactComponent as SliderArrowPrev} from '../../img/icons/slider-arrow-prev.svg'
import {ReactComponent as SliderArrowNext} from '../../img/icons/slider-arrow-next.svg'


export function Catalog(): JSX.Element {

  const [page, setPage] = useState(1);
  const [shownGoods, setShownGoods] = useState(12);
  const [pageNumber, setPageNumber] = useState(Math.round(shopItems.length / 12) === shopItems.length / 12 ? shopItems.length / 12 : shopItems.length / 12 + 1);
  const pageNumbers = Array.from({ length: pageNumber }, (_, index) => index + 1);

  return (
    <>
      <ul className="products__list">
        {
          shopItems.slice(0 + shownGoods * (page - 1), shownGoods * page).map((item) => {
            return (
              <Good item={item}/>
            )
          })
        }
      </ul>
      <div className="catalog__buttons-wrapper">
        <button className="button button--white" disabled={shownGoods >= shopItems.length} onClick={() => {setShownGoods(shownGoods + 12); setPageNumber(Math.floor(pageNumbers.length - 1))}}>show more</button>
        <ul className="catalog-pagination">

          <li>
            <button className="catalog-pagination__btn" onClick={() => setPage(page - 1)} disabled={page <= 1}>
              <SliderArrowPrev/>
            </button>
          </li>
          {pageNumbers.map((pageNumber) => {
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
    </>
  )
}
