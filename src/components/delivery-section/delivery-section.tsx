import "../../styles/blocks/delivery-form.sass"
import "../../styles/blocks/delivery.sass"

export function DeliverySection(): JSX.Element {
  return (
    <section className="delivery section">
        <div className="delivery__text-wrapper">
          <h2 className="title title--2 title--section delivery__title">Home delivery of your favorite ice cream</h2>
          <p className="delivery__description">Do you want to enjoy your favorite dessert, but don’t have time to go to the store? Order ice cream delivery to your home, and the courier will bring you your order within an hour!</p>
        </div>
        <form className="delivery__form delivery-form" action="post">
          <legend className="delivery-form__input-wrapper--legend">Enter your address and delivery date and we will contact you to confirm your order.</legend>
          <label className="delivery-form__input-wrapper delivery-form__input-wrapper--date" htmlFor="delivery-date">
            Date
            <input className="delivery-form__input" type="date" name="delivery-date" id="delivery-date" placeholder="2024-01-01" required/>
          </label>
          <label className="delivery-form__input-wrapper delivery-form__input-wrapper--phone" htmlFor="delivery-phone">
            Phone
            <input className="delivery-form__input" type="tel" name="delivery-phone" id="delivery-phone" placeholder="050-1234567" pattern="[0-9]{3}-[0-9]{7}" required/>
          </label>
          <label className="delivery-form__input-wrapper delivery-form__input-wrapper--address" htmlFor="delivery-address">
            Address
            <input className="delivery-form__input" type="text" name="delivery-address" id="delivery-address" placeholder="Hertzel, 17, Tel-Aviv"/>
          </label>
        </form>
    </section>
  )
}
