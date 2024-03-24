import { SlideImage } from "../../../types/slide"

type inactiveSlideProps = {
  slide: SlideImage;
  onChangeSlide: () => void;
}

export function InactiveSlide({slide, onChangeSlide}: inactiveSlideProps): JSX.Element {
  return (
    <div className="slider__next-slide" onClick={() => onChangeSlide()}>
      <picture>
        <source srcSet={`${slide.image}.webp`} type="image/webp" width={80} height={150}/>
        <source media="(min-width: 1170px)" srcSet={`${slide.image}.webp 1x, ${slide.image}@2x.webp 2x`} type="image/webp"/>
        <source media="(min-width: 900px)" srcSet={`${slide.image}.webp 1x, ${slide.image}@2x.webp 2x`} type="image/webp"/>
        <img src={`${slide.image}.webp`} width={80} height={150} alt={slide.title} />
      </picture>
    </div>
  )
}
