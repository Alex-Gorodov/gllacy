import { DeliverySection } from "../../components/home/delivery-section/delivery-section";
import { FeedbackSection } from "../../components/home/feedback-section/feedback-section";
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
        <main className="main">
          <Slider/>
          <Promo/>
          <ShopSection/>
          <Advantages/>
          <Articles/>
          <DeliverySection/>
          <FeedbackSection/>
        </main>
      </Layout>
    </>
  );
}
