import { Social } from "../social/social";
import '../../styles/blocks/footer.sass'
import { Link } from "react-router-dom";

export function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <Social/>
      <p>
        Made by <Link className="footer__author" to="https://alex-gorodov.github.io/Portfolio/">Alex Gorodov</Link>
      </p>
    </footer>
  )
}
