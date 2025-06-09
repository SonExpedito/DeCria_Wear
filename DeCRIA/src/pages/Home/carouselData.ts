import card1 from '#/assets/images/carousel/1.png';

export type CarouselItem = {
  data: number;
  nome: string;
  image: any;
};

export const carouselData: CarouselItem[] = [
  { data: 1, nome: "conjuntoNike", image: card1 },
  { data: 2, nome: "conjuntoAdidas", image: card1 },
  { data: 3, nome: "conjuntoPuma", image: card1 },
];
