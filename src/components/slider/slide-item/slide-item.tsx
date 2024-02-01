import { RootState } from "../../../store/RootState";
import '../../../styles/blocks/slider/slider.sass';
import '../../../styles/blocks/slider/slide.sass';
import { Slide } from "../../../types/slide";
import { useDispatch, useSelector } from "react-redux";
import cn from 'classnames';
import { sliderItems } from "../../../mocks/slider";
import { setActiveSlide } from "../../../store/slider/slider-actions";
import { useResizeListener } from "../../../hooks/useResizeListener";
import { InactiveSlide } from "../inactive-slide/inactive-slide";
import { usePageLoaded } from "../../../hooks/usePageLoaded";

type SlideProps = {
  slide: Slide;
}

export function SlideItem({slide}: SlideProps): JSX.Element {
  const isSliderMoving = useSelector((state: RootState) => state.slider.isMoving)
  const imageClassName = cn('slide__image', {
    'slide__image--animated' : isSliderMoving,
    'slide__image--loading' : !usePageLoaded(),    
  })

  const dispatch = useDispatch();
  const activeSlide = useSelector((state: RootState) => state.slider.activeSlide);

  return (
    <div className="slider__item slide">
      <h2 className="slide__title">{slide.title}</h2>
      <p className="slide__description">{slide.description}</p>
      <button className="slide__add-to-cart-btn button">Order</button>
      <div className='slide__image-wrapper'>
        <img className={imageClassName} src={slide.image} alt={slide.title} width="306" height="507"/>
        <div className="slider__next-slides">
          <InactiveSlide onChangeSlide={() => dispatch(setActiveSlide({ activeSlide: activeSlide < sliderItems.length - 1 ? sliderItems[activeSlide + 1].id : sliderItems[0].id }))} slide={activeSlide < sliderItems.length - 1 ? sliderItems[activeSlide + 1] : sliderItems[0]} />
          <InactiveSlide onChangeSlide={() => dispatch(setActiveSlide({ activeSlide: activeSlide < sliderItems.length - 2 ? sliderItems[activeSlide + 2].id : sliderItems[activeSlide - 1].id }))} slide={activeSlide < sliderItems.length - 2 ? sliderItems[activeSlide + 2] : sliderItems[activeSlide - 1]} />
        </div>
      {
        useResizeListener() < 1250
        ?
          <div className="slider__pagination pagination">
            <button className={activeSlide === 0 ? 'pagination__btn pagination__btn--active' : 'pagination__btn'} onClick={() => dispatch(setActiveSlide({activeSlide: 0}))}>
              <span className="visually-hidden">turn to first slide</span>
            </button>
            <button className={activeSlide === 1 ? 'pagination__btn pagination__btn--active' : 'pagination__btn'} onClick={() => dispatch(setActiveSlide({activeSlide: 1}))}>
              <span className="visually-hidden">turn to second slide</span>
            </button>
            <button className={activeSlide === 2 ? 'pagination__btn pagination__btn--active' : 'pagination__btn'} onClick={() => dispatch(setActiveSlide({activeSlide: 2}))}>
              <span className="visually-hidden">turn to third slide</span>
            </button>
          </div>
        :
        ''
      }
      </div>
    </div>
  )
}
