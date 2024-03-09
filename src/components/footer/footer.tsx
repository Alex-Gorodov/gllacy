import { Social } from "../social/social";
import '../../styles/blocks/footer.sass'

export function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <Social/>
    </footer>
  )
}
