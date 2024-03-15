import { Social } from "../social/social";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";

export function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <Social/>
      <p>
        Made by <Link className="footer__author" to={AppRoute.Portfolio} target="_blank">Alex Gorodov</Link>
      </p>
    </footer>
  )
}
