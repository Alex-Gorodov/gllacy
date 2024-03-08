import { Advantages } from "../../components/home/advantages/advantages";
import { Articles } from "../../components/home/articles/articles";
import { Header } from "../../components/header/header";
import { ShopSection } from "../../components/home/shop-section/shop-section";
import { Promo } from "../../components/promo/promo";
import { Slider } from "../../components/slider/slider/slider";
import { DeliverySection } from "../../components/home/delivery-section/delivery-section";
import { ContactSection } from "../../components/home/contact-section/contact-section";

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
        <ContactSection/>
      </main>
    </>
  );
}
