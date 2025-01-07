import { FC } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

interface Props {
  salesImages: string[];
}
export const SalesCarousel: FC<Props> = ({ salesImages }) => {
  return (
    <Carousel
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={7000}
      containerClass="carousel-container"
      responsive={responsive}
    >
      {salesImages.map((image) => (
        <img key={image} src={image} alt={image} />
      ))}
    </Carousel>
  );
};
