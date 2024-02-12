import { Advantages } from "../../components/advantages/advantages";
import { Articles } from "../../components/articles/articles";
import { Header } from "../../components/header/header";
import { MainPageShop } from "../../components/main-page-shop/main-page-shop";
import { Promo } from "../../components/promo/promo";
import { Slider } from "../../components/slider/slider/slider";

export function HomePage() {
  return (
    <>
      <Header/>
      <main>
        <Slider/>
        <Promo/>
        <MainPageShop/>
        <Advantages/>
        <Articles/>
      </main>
    </>
  );
}
