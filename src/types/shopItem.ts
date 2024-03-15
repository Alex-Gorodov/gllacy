// export type IceCreamTypes = 'creamy' | 'sorbet' | 'all';

export enum IceCreamTypes {
  All = 'all',
  Creamy = 'creamy',
  Sorbet = 'sorbet',
}

export type ShopItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  fats: number;
  type: IceCreamTypes;
  img: string;
  amountInCart?: number;
}
