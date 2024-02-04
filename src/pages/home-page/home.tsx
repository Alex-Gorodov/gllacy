import { Header } from "../../components/header/header";
import { Promo } from "../../components/promo/promo";
import { Slider } from "../../components/slider/slider/slider";

export function HomePage() {
  return (
    <>
      <Header/>
      <main>
        <Slider/>
        <Promo/>
      </main>
    </>
  );
}
