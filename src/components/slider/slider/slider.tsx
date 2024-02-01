import { ReactComponent as ArrowNext } from "../../../img/icons/slider-arrow-next.svg";
import { ReactComponent as ArrowPrev } from "../../../img/icons/slider-arrow-prev.svg";
import { SlideItem } from "../slide-item/slide-item";
import { setActiveSlide } from "../../../store/slider/slider-actions";
import { useResizeListener } from "../../../hooks/useResizeListener";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/RootState";
import { sliderItems } from "../../../mocks/slider";
import '../../../styles/blocks/slider/slider.sass'

export function Slider(): JSX.Element {
  const dispatch = useDispatch();
  const activeSlide = useSelector((state: RootState) => state.slider.activeSlide);

  return(
    <div className="slider">
      <div className="slider__wrapper">
        <SlideItem slide={sliderItems[activeSlide]} key={sliderItems[activeSlide].title}/>
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
        {
          useResizeListener() >= 1250
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
