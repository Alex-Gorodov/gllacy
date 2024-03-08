import { Link } from 'react-router-dom'
import '../../styles/blocks/not-found.sass'
import { AppRoute } from '../../const'

export function NotFoundPage() {
  return (
    <div className="not-found">
      <p className='not-found__text'>
        <span>404</span>
        <span>Page Not Found</span>
        <Link className="not-found__link" to={AppRoute.Root}>To homepage</Link>
      </p>
    </div>
  )
}
