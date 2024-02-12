import "../../styles/blocks/subscribe.sass"
import "../../styles/blocks/subscribe-form.sass"

export function SubscribeArticle(): JSX.Element {
  return (
    <article className="subscribe">
      <div className="subscribe__wrapper">
        <p className="subscribe__description">Subscribe to our sweet newsletter and always be keep abreast of all the delicious things that happen here. We promise not to spam or send any unnecessary nonsense. Honestly =)</p>
        <form className="subscribe__form subscribe-form" action="" method="post">
          <label className="subscribe-form__input-wrapper" htmlFor="email">
            <input className="subscribe-form__input" type="email" name="e-mail" id="email" placeholder="email@example.com"/>
          </label>
          <button className="subscribe-form__btn button" type="submit">Send</button>
        </form>
      </div>
    </article>
  )
}
