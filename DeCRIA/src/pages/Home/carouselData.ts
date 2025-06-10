import card1 from '#/assets/images/carousel/1.png';
import card2 from '#/assets/images/carousel/2.png';
import card3 from '#/assets/images/carousel/3.png';

export type CarouselItem = {
  id: number;
  nome: string;
  image: any;
};

export const carouselData: CarouselItem[] = [
  { id: 1, nome: "conjuntoNike", image: card1 },
  { id: 2, nome: "conjuntoAdidas", image: card2 },
  { id: 3, nome: "conjuntoPuma", image: card3 },
];
