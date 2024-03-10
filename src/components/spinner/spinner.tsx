import { BallTriangle } from "react-loader-spinner";

export function Spinner(): JSX.Element {
  return (
    <BallTriangle
      height={60}
      width={60}
      radius={5}
      color="#ff4a78"
      ariaLabel="ball-triangle-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      />
  )
}
