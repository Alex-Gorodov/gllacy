import { Link } from "react-router-dom";
import { AppRoute } from "../../const";

export function SuccessPage() {
  return (
    <>
      <p>SENDED!</p>
      <Link to={AppRoute.Root}>Home</Link>
    </>
  )
}
