import { ReactComponent as Instagram } from "../../img/icons/Instagram.svg";
import { ReactComponent as Facebook } from "../../img/icons/facebook.svg";
import { ReactComponent as VK } from "../../img/icons/vk.svg";
import { Link } from "react-router-dom";

export function Social(): JSX.Element {
  return (
    <div className="slider__social social">
      <ul className="social__list">
        <li className="social__item">
          <Link to='#' className="social__link">
            <span className="visually-hidden">find us in vkontakte</span>
            <VK/>
          </Link>
        </li>
        <li className="social__item">
          <Link to='#' className="social__link">
            <span className="visually-hidden">find us on facebook</span>
            <Facebook/>
          </Link>
        </li>
        <li className="social__item">
          <Link to='#' className="social__link">
            <span className="visually-hidden">find us in instagram</span>
            <Instagram/>
          </Link>
        </li>
      </ul>
    </div>
  )
}
