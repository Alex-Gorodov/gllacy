import { advantages } from "../../mocks/advantages"
import "../../styles/blocks/advantages.sass"

export function Advantages(): JSX.Element {
  return(
    <section className="advantages section">
      <div className="advantages__wrapper">
        <h2 className="advantages__title section__title">Glacie's store is an online and offline store selling its own ice cream by weight.</h2>
        <ul className="advantages__list">
          {
            advantages.map((item) => {
              return (
              <li className="advantage">
                <img src={item.image} alt="" />
                <p className="advantage__description">{item.description}</p>
              </li>
              )
            })
          }
        </ul>
      </div>
    </section>
  )
}
