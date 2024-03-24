import { Link } from "react-router-dom";
import { FeedBackForm } from "../../feedback-form/feedback-form";
import "../../../styles/blocks/feedback-form.sass"
import { useDispatch } from "react-redux";
import { toggleFeedbackForm } from "../../../store/page/page-actions";

export function FeedbackSection(): JSX.Element {
  const dispatch = useDispatch();
  return(
    <section className="feedback section">
      <div className="feedback__text-wrapper">
        <h2 className="visually-hidden">feedback us</h2>
        <p className="feedback__description">Address of the main office and offline store:</p>
        <address className="feedback__bold">Hertzel, 52, Tel-Aviv</address>
        <p className="feedback__description">For orders by phone:</p>
        <Link className="feedback__bold" to="tel:037770077">03-777-0077</Link>
        <span className="feedback__subtitle">(from 9 to 22 daily)</span>
        <button className="feedback__btn button" onClick={() => dispatch(toggleFeedbackForm({isOpened: true}))}>Feedback form</button>
      </div>
      <FeedBackForm/>
    </section>
  )
}
