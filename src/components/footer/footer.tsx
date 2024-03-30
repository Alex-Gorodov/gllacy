import { Social } from "../social/social";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";
import { ReactComponent as DevIcon } from "../../img/icons/developer-icon.svg";

export function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <Social/>
      {/* <p className="footer__text"> */}
        <p className="footer__text">
          Design belongs to 
          <Link className="footer__author" to="https://htmlacademy.ru" target="_blank">.html academy</Link>
          © 2021.
        </p>
        <p className="footer__text">
          Made by 
          <Link className="footer__author" to={AppRoute.Portfolio} target="_blank">
            <DevIcon/>
            Alex Gorodov
          </Link>
          © 2024
        </p>
      {/* </p> */}
    </footer>
  )
}
