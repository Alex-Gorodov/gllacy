import { Advantages } from "../../components/advantages/advantages";
import { Articles } from "../../components/articles/articles";
import { Header } from "../../components/header/header";
import { ShopSection } from "../../components/shop-section/shop-section";
import { Promo } from "../../components/promo/promo";
import { Slider } from "../../components/slider/slider/slider";
import { DeliverySection } from "../../components/delivery-section/delivery-section";

export function HomePage() {
  return (
    <>
      <Header/>
      <main>
        <Slider/>
        <Promo/>
        <ShopSection/>
        <Advantages/>
        <Articles/>
        <DeliverySection/>
      </main>
    </>
  );
}
