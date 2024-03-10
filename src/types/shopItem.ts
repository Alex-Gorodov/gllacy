export type ShopItem = {
  _id: {
    $oid: string;
  };
  name: string;
  description: string;
  price: number;
  img: string;
  amountInCart?: number;
}
