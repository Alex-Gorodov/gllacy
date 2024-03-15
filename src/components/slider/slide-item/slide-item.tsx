import { ReactComponent as ArrowNext } from "../../../img/icons/slider-arrow-next.svg";
import { ReactComponent as ArrowPrev } from "../../../img/icons/slider-arrow-prev.svg";
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
import { MOBILE_WIDTH } from "../../../const";

type SlideProps = {
  slide: Slide;
}

export function SlideItem({slide}: SlideProps): JSX.Element {
  const isSliderMoving = useSelector((state: RootState) => state.slider.isMoving);
  const dispatch = useDispatch();
  const activeSlide = useSelector((state: RootState) => state.slider.activeSlide);

  const imageClassName = cn('slide__image', {
    'slide__image--loading': isSliderMoving,
  });

  return (
    <div className="slider__item slide">
      <h2 className="slide__title">{slide.title}</h2>
      <p className="slide__description">{slide.description}</p>
      <button className="slide__add-to-cart-btn button button--white">Order</button>
      <div className='slide__image-wrapper'>
        <img className={imageClassName} src={slide.image} alt={slide.title} width="306" height="507"/>
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
        <div className="slider__next-slides">
          <InactiveSlide onChangeSlide={() => dispatch(setActiveSlide({ activeSlide: activeSlide < sliderItems.length - 1 ? sliderItems[activeSlide + 1].id : sliderItems[0].id }))} slide={activeSlide < sliderItems.length - 1 ? sliderItems[activeSlide + 1] : sliderItems[0]} />
          <InactiveSlide onChangeSlide={() => dispatch(setActiveSlide({ activeSlide: activeSlide < sliderItems.length - 2 ? sliderItems[activeSlide + 2].id : sliderItems[activeSlide - 1].id }))} slide={activeSlide < sliderItems.length - 2 ? sliderItems[activeSlide + 2] : sliderItems[activeSlide - 1]} />
        </div>
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
