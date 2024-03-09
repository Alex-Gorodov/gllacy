import { BallTriangle } from "react-loader-spinner";

export function Spinner(): JSX.Element {
  return (
    <BallTriangle
      height={60}
      width={60}
      radius={5}
      color="#4fa94d"
      ariaLabel="ball-triangle-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      />
  )
}
