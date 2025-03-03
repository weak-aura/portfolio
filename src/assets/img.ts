import img1 from "./images/1.JPG";
import img2 from "./images/2.JPG";
import img3 from "./images/3.JPG";
import img4 from "./images/4.JPG";
import img5 from "./images/5.JPG";

export interface SlidesTypes {
  imageUrl: string
}

export const slides: SlidesTypes[] = [
  {imageUrl: img1},
  {imageUrl: img2},
  {imageUrl: img3},
  {imageUrl: img4},
  {imageUrl: img5},
] 