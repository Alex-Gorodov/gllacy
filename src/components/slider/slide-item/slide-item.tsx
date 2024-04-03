import { ReactComponent as ArrowNext } from "../../../img/icons/slider-arrow-next.svg";
import { ReactComponent as ArrowPrev } from "../../../img/icons/slider-arrow-prev.svg";
import { ReactComponent as SuccessIcon } from "../../../img/icons/success.svg";
import { setActiveSlide } from "../../../store/slider/slider-actions";
import { useResizeListener } from "../../../hooks/useResizeListener";
import { InactiveSlide } from "../inactive-slide/inactive-slide";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/RootState";
import { sliderItems } from "../../../mocks/slider";
import { Slide } from "../../../types/slide";
import { Social } from "../../social/social";
import { Pagination } from "../pagination";
import cn from 'classnames';
import { MOBILE_WIDTH, SPINNER_TIMEOUT } from "../../../const";
import { addToCart } from "../../../store/page/page-actions";
import { shopItems } from "../../../mocks/shopItems";
import { Spinner } from "../../spinner/spinner";
import { useState } from "react";

type SlideProps = {
  slide: Slide;
}

export function SlideItem({slide}: SlideProps): JSX.Element {
  const isSliderMoving = useSelector((state: RootState) => state.slider.isMoving);
  const dispatch = useDispatch();
  const activeSlide = useSelector((state: RootState) => state.slider.activeSlide);

  const [isLoading, setIsLoading] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const loading = cn({
    'slide__image--loading': isSliderMoving,
  });

  const handleAddToCart = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsAdded(true);
      setTimeout(() => {
        setIsAdded(false);
      }, SPINNER_TIMEOUT / 2);
    }, SPINNER_TIMEOUT / 2);
  };

  return (
    <div className="slider__item slide">
      <div className="slide__wrapper">
        <h2 className={`slide__title ${loading}`}>{slide.title}</h2>
        <p className={`slide__description ${loading}`}>{slide.description}</p>
        <button
          className="slide__add-to-cart-btn button button--white"
          onClick={() => {
            handleAddToCart();
            setTimeout(() => {
              dispatch(addToCart({item: shopItems[activeSlide]}));
            }, SPINNER_TIMEOUT);
            }
          }>
          {isLoading && <Spinner size={"18"} color={"#2d3440"} />}
          {!isLoading && isAdded && <SuccessIcon/>}
          {!isLoading && !isAdded && <>Order</>}
        </button>
        <div className='slide__image-wrapper'>
          <picture>
            <source srcSet={`${slide.image}.webp`} type="image/webp" width={306} height={507}/>
            <source media="(min-width: 1170px)" srcSet={`${slide.image}.webp 1x, ${slide.image}@2x.webp 2x`} type="image/webp"/>
            <source media="(min-width: 900px)" srcSet={`${slide.image}.webp 1x, ${slide.image}@2x.webp 2x`} type="image/webp"/>
            <img className={`slide__image ${loading}`} src={`${slide.image}.png`}  alt={slide.title}/>
          </picture>
          <div className="slider__buttons">
            <button className="slider__btn button button--circle" onClick={() => dispatch(setActiveSlide({activeSlide: activeSlide - 1}))}>
              <ArrowPrev/>
              <span className="visually-hidden">previous slide</span>
            </button>
            <button className="slider__btn button button--circle" onClick={() => dispatch(setActiveSlide({activeSlide: activeSlide + 1}))}>
              <ArrowNext/>
              <span className="visually-hidden">next slide</span>
            </button>
          </div>
        </div>
      </div>
      <div className="slider__next-slides">
        <InactiveSlide onChangeSlide={() => dispatch(setActiveSlide({ activeSlide: activeSlide < sliderItems.length - 1 ? sliderItems[activeSlide + 1].id : sliderItems[0].id }))} slide={activeSlide < sliderItems.length - 1 ? sliderItems[activeSlide + 1] : sliderItems[0]} />
        <InactiveSlide onChangeSlide={() => dispatch(setActiveSlide({ activeSlide: activeSlide < sliderItems.length - 2 ? sliderItems[activeSlide + 2].id : sliderItems[activeSlide - 1].id }))} slide={activeSlide < sliderItems.length - 2 ? sliderItems[activeSlide + 2] : sliderItems[activeSlide - 1]} />
      </div>
      {
        useResizeListener() < MOBILE_WIDTH
        ?
        <div className="slider__bottom">
          <Pagination/>
          <Social/>
        </div>
        :
        ''
      }
    </div>
  )
}
