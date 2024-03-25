export enum AppRoute {
  Root = '/gllacy/',
  Catalog = `/gllacy/catalog`,
  CatalogCreamy = '/gllacy/catalog/creamy',
  CatalogSorbet = '/gllacy/catalog/sorbet',
  Shipping = '/gllacy/shipping',
  About = '/gllacy/about',
  Blog = '/gllacy/blog',
  Portfolio = "https://alex-gorodov.github.io/Portfolio/"
}

export enum BackgroundColors {
  firstSlide = '#feafc3',
  secondSlide = '#69a9ff',
  thirdSlide = '#fcc850'
}

export enum IceCreamTypes {
  All = 'all',
  Creamy = 'creamy',
  Sorbet = 'sorbet',
}

export enum SortTypes {
  Popular = 'popular',
  Price = 'price',
  Fats = 'fats'
}

export enum FatsAmount {
  NoFats = 0,
  Ten = 10,
  Thirty = 30,
  More = 31,
}

export const ITEMS_BY_PAGE = 12;

export const MOBILE_WIDTH = 900;

export const OVERFLOW_WIDTH = 1170;

export const SPINNER_TIMEOUT = Math.random() * 5000;
