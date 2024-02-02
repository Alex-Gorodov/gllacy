import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/RootState";
import { setActiveSlide } from "../../store/slider/slider-actions";

export function Pagination(): JSX.Element {
  const dispatch = useDispatch();
  const activeSlide = useSelector((state: RootState) => state.slider.activeSlide);
  
  return (
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
  )
}
