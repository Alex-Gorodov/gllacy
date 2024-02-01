export type Slide = {
  id: number;
  title: string;
  description: string;
  image: string;
}

export type SlideImage = Omit<Slide, 'description'>;
