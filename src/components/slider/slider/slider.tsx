
import { SlideItem } from "../slide-item/slide-item";
import { useResizeListener } from "../../../hooks/useResizeListener";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/RootState";
import { sliderItems } from "../../../mocks/slider";
import { Pagination } from "../pagination";
import { Social } from "../../social/social";
import { MOBILE_WIDTH } from "../../../const";

export function Slider(): JSX.Element {
  const activeSlide = useSelector((state: RootState) => state.slider.activeSlide);

  return(
    <section className="slider section">
      <div className="slider__wrapper">
        <SlideItem slide={sliderItems[activeSlide]} key={sliderItems[activeSlide].title}/>
        {
          useResizeListener() >= MOBILE_WIDTH
          ?
          <div className="slider__bottom">
            <Pagination/>
            <Social/>
          </div>
          :
          ''
        }
      </div>
    </section>
  )
}
