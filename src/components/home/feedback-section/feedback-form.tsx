import { ReactComponent as CloseCross } from '../../../img/icons/cross.svg';
import cn from "classnames";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/RootState';
import { toggleFeedbackForm } from '../../../store/page/page-actions';
import { useRef, useState } from 'react';
import { Spinner } from '../../spinner/spinner';
import { SPINNER_TIMEOUT } from '../../../const';
import { useOutsideClick } from '../../../hooks/useOutsideClick';

export function FeedBackForm(): JSX.Element {
  const isFormOpened = useSelector((state: RootState) => state.page.isFeedbackFormOpened);
  const dispatch = useDispatch();
  const formClassName = cn('feedback-form__wrapper', {
    'feedback-form__wrapper--opened' : isFormOpened
  });
  const [showSpinner, setShowSpinner] = useState(false);
  const [isFormSent, setFormSent] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    review: ''
  });

  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const reviewInputRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSendForm = (e: React.FormEvent<HTMLButtonElement>) => {
    if (formData.review.length > 0) {
      setFormSent(true);
      setShowSpinner(true);
      setFormData({
        ...formData
      });
  
      setTimeout(() => {
        setShowSpinner(false);
        setFormSent(true);
      }, SPINNER_TIMEOUT);
    }
  };

  const handleResetForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowSpinner(false);
    dispatch(toggleFeedbackForm({ isOpened: false }));
    setTimeout(() => {
      setFormSent(false);
    }, 500);
    setFormData({
      name: '', email: '', review: ''
    })
  };

  const ref = useOutsideClick(() => {
    isFormOpened && dispatch(toggleFeedbackForm({ isOpened: false }));
  }) as React.RefObject<HTMLFormElement>;

  const matches = formData.name.match(/(\w+)/);
  const firstWord = matches !== null ? `, ${matches[1]},` : '';


  return (
    <div className={formClassName}>
      <form className="feedback__form feedback-form" action="" ref={ref}>
        {showSpinner && 
          <span className="feedback-form__spinner">
            <Spinner size={'40'} color={'#2d3440'}/>
          </span>
        }
        {isFormSent ? 
          <>
            {!showSpinner &&
              <>
                {
                  firstWord ?
                  <p className='feedback__reaction'>Thank you{firstWord} for your feedback!</p>
                  :
                  <p className='feedback__reaction'>You sent an anonymous message, perhaps you have something to hide, but nevertheless, thanks for the feedback!</p>
                }
                <button className="button button--red" onClick={(e) => handleResetForm(e)}>Close</button> 
              </>
            }
          </>
         : 
          <>
            <button className="feedback-form__close-btn" type="button" onClick={() => dispatch(toggleFeedbackForm({isOpened: false}))}>
              <CloseCross/>
              <span className="visually-hidden">close</span>
            </button>
            <h3 className="feedback-form__title title title--3">We will definitely answer you!</h3>
            <label htmlFor="feedback-name">
              <input className='feedback-form__input' type="text" name="name" id="feedback-name" placeholder="Full name" value={formData.name} onChange={handleChange} ref={nameInputRef}/>
            </label>
            <label htmlFor="feedback-email">
              <input className='feedback-form__input' type="email" name="email" id="feedback-email" placeholder="email@example.com" value={formData.email} onChange={handleChange} ref={emailInputRef}/>
            </label>
            <label htmlFor="feedback-review">
              <textarea className='feedback-form__input' name="review" id="feedback-review" cols={30} rows={5} placeholder="In free form" value={formData.review} onChange={handleChange} ref={reviewInputRef} required/>
            </label>
            <button className='feedback-form__submit-btn button button--red' type="submit" onClick={(e) => handleSendForm(e)}>Submit</button>
          </>
        }
      </form>
    </div>
  );
}
