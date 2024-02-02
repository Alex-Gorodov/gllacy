
import { SlideItem } from "../slide-item/slide-item";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/RootState";
import { sliderItems } from "../../../mocks/slider";
import '../../../styles/blocks/slider/slider.sass'
import '../../../styles/blocks/slider/social.sass'
import { Pagination } from "../pagination";
import { Social } from "../../social/social";

export function Slider(): JSX.Element {
  const activeSlide = useSelector((state: RootState) => state.slider.activeSlide);

  return(
    <div className="slider">
      <div className="slider__wrapper">
        <SlideItem slide={sliderItems[activeSlide]} key={sliderItems[activeSlide].title}/>
        <div className="slider__bottom">
          <Pagination/>
          <Social/>
        </div>
      </div>
    </div>
  )
}
