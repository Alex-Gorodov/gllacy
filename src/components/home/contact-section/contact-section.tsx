import { Link } from "react-router-dom";
import '../../../styles/blocks/button.sass'
import '../../../styles/blocks/contact.sass'

export function ContactSection(): JSX.Element {
  return(
    <section className="contact section">
      <div className="contact__text-wrapper">
        <h2 className="visually-hidden">contact us</h2>
        <p className="contact__description">Address of the main office and offline store:</p>
        <address className="contact__bold">Hertzel, 52, Tel-Aviv</address>
        <p className="contact__description">For orders by phone:</p>
        <Link className="contact__bold" to="tel:037770077">03-777-0077</Link>
        <span className="contact__subtitle">(from 10 to 20 daily)</span>
        <button className="contact__btn button">Feedback form</button>
      </div>
    </section>
  )

}
