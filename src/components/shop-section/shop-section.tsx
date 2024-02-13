import { shopItems } from "../../mocks/shopItems";
import {ReactComponent as CartIcon} from './../../img/icons/product-cart.svg'
import "../../styles/blocks/product.sass"
import "../../styles/blocks/products.sass"
import "../../styles/blocks/section.sass"

export function ShopSection(): JSX.Element {
  return (
    <section className="products section">
      <h2 className="title title--2 title--section products__title">Try our most popular ice cream flavors</h2>
      <ul className="products__list">
        {
          shopItems.slice(0,4).map((item) => {
            return (
              <li className="products__item product" key={item._id.$oid}>
                <img className="product__image" src={item.img} alt={item.name} width={168} height={168}/>
                <h4 className="title title--4">{item.name}</h4>
                <p className="product__description">{item.description}</p>
                <div className="product__price-wrapper">
                  <strong className="product__price">{item.price.toFixed(2)} $/kg</strong>
                  <button className="product__btn">
                    <CartIcon/>  
                  </button>
                </div>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}
