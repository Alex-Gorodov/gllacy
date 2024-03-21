import { Link } from "react-router-dom"
import { AppRoute } from "../../../const"

export function BlogArticle(): JSX.Element {
  return (
    <article className="article blog">
      <Link className="blog__link" to={AppRoute.Blog}>
        <span className="blog__subtitle">New in our blog</span>
        <h3 className="blog__title title title--3">10 ways to serve fruit sorbets to the table</h3>
      </Link>
    </article>
  )
}
