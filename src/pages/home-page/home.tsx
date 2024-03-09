import { DeliverySection } from "../../components/home/delivery-section/delivery-section";
import { ContactSection } from "../../components/home/contact-section/contact-section";
import { ShopSection } from "../../components/home/shop-section/shop-section";
import { Advantages } from "../../components/home/advantages/advantages";
import { Articles } from "../../components/home/articles/articles";
import { Slider } from "../../components/slider/slider/slider";
import { Layout } from "../../components/layout/layout";
import { Promo } from "../../components/promo/promo";

export function HomePage() {
  return (
    <>
      <Layout hasNav={true}>
        <main>
          <Slider/>
          <Promo/>
          <ShopSection/>
          <Advantages/>
          <Articles/>
          <DeliverySection/>
          <ContactSection/>
        </main>
      </Layout>
    </>
  );
}
