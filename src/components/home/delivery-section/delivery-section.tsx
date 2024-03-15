
import { useRef, useState } from 'react';
import { Spinner } from "../../spinner/spinner";

export function DeliverySection(): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const today = new Date();
  const formattedDate = today.toISOString().slice(0, 10);

  const [formClassName, setFormClassName] = useState('delivery__form delivery-form');
  const [isFormSent, setFormSent] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false)
  
  const typePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    
    if (value.length === 3) {
      value += '-';
    }
    if (inputRef.current) {
      inputRef.current.value = value;
    }
  };

  const handleDelete = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && inputRef.current) {
      const selectionStart = inputRef.current.selectionStart;
      const selectionEnd = inputRef.current.selectionEnd;

      if (selectionStart === selectionEnd && selectionStart === 4 && inputRef.current.value.charAt(selectionStart - 1) === '-') {
        inputRef.current.value = inputRef.current.value.slice(0, selectionStart - 2);
        e.preventDefault();
      }
    }
  };

  const submit = (e: React.FormEvent) => {
    const dateValue = (document.getElementById('delivery-date') as HTMLInputElement)?.value;
    const phoneValue = (document.getElementById('delivery-phone') as HTMLInputElement)?.value;
    const addressValue = (document.getElementById('delivery-address') as HTMLInputElement)?.value;
    const spinnerTime = Math.random() * 5000;

    console.log(spinnerTime);
    
  
    if (dateValue && phoneValue.length === 11 && /^[a-zA-Z\s,'\-]+,\s*\d+,\s*[a-zA-Z\s\-]+$/.test(addressValue)) {
      setFormSent(true);
      setShowSpinner(true);
      setTimeout(() => {
        setShowSpinner(false);
      }, spinnerTime);
      setFormClassName('delivery__form delivery-form delivery-form--sent');
    } else {
      setFormClassName('delivery__form delivery-form delivery-form--error');
      setTimeout(() => {
        setFormClassName('delivery__form delivery-form');
      }, spinnerTime);
    }
  };

  return (
    <section className="delivery section">
      <div className="delivery__text-wrapper">
        <h2 className="title title--2 title--section delivery__title">Home delivery of your favorite ice cream</h2>
        <p className="delivery__description">Do you want to enjoy your favorite dessert, but don’t have time to go to the store? Order ice cream delivery to your home, and the courier will bring you your order within an hour!</p>
      </div>
      <form className={formClassName} method="post">
        {
          isFormSent
          ?
          <>
            {
              showSpinner
                ?
                <Spinner/>
                :
                <>    
                  <p className="delivery__success-message">Thank you for submitting. We will contact you shortly to confirm your order.</p>
                  <button
                    className="delivery-form__btn button button--red"
                    onClick={() => {
                      setFormSent(false)
                      setFormClassName('delivery__form delivery-form')
                    }}
                  >Back to form</button>
                </>
              }
          </>
          :
          <>
            <legend className="delivery-form__legend">Enter your address and delivery date and we will contact you to confirm your order.</legend>
            <label className="delivery-form__input-wrapper delivery-form__input-wrapper--date" htmlFor="delivery-date">
              Date
              <input className="delivery-form__input" type="date" name="delivery-date" id="delivery-date" defaultValue={formattedDate} required/>
            </label>
            <label className="delivery-form__input-wrapper delivery-form__input-wrapper--phone" htmlFor="delivery-phone">
              Phone
              <input className="delivery-form__input" ref={inputRef} type="tel" name="delivery-phone" id="delivery-phone" placeholder="050-1234567" pattern="[0-9]{3}-[0-9]{7}" required onChange={typePhone} onKeyDown={handleDelete}/>
            </label>
            <label className="delivery-form__input-wrapper delivery-form__input-wrapper--address" htmlFor="delivery-address">
              Address
              <input className="delivery-form__input" name="delivery-address" id="delivery-address" placeholder="Hertzel, 17, Tel-Aviv" pattern="^[a-zA-Z\s,'\-]+,\s*\d+,\s*[a-zA-Z\s\-]+$" required/>
            </label>
            <button className="delivery-form__btn button button--red" onClick={submit}>Send</button>
          </>
        }
      </form>
    </section> 
  )
}
