import { SlideImage } from "../../../types/slide"

type inactiveSlideProps = {
  slide: SlideImage;
  onChangeSlide: () => void;
}

export function InactiveSlide({slide, onChangeSlide}: inactiveSlideProps): JSX.Element {
  return (
    <div className="slider__next-slide" onClick={() => onChangeSlide()}>
      <img src={slide.image} width={80} height={150} alt={slide.title} />
    </div>
  )
}
