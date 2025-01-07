import { FC } from "react";

interface Props {
  rating: number;
}

export const BookRating: FC<Props> = ({ rating }) => {
  const MAX_STARS = 5;
  return (
    <div className="flex items-center">
      {[...Array(MAX_STARS)].map((_, index) => {
        const isFullStar = index + 1 <= Math.floor(rating); // Estrella completa
        const isHalfStar =
          index + 1 > Math.floor(rating) && index + 1 - 0.5 <= rating; // Estrella media

        return (
          <svg
            key={index}
            aria-hidden="true"
            className={`h-5 w-5 ${
              isFullStar || isHalfStar ? "text-yellow-300" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d={
                isFullStar
                  ? "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  : isHalfStar
                  ? "M10 15.273l-3.447 2.506a.625.625 0 01-.906-.675l.906-3.464L4.295 10.69a.625.625 0 01.384-1.058l3.62-.282L10 5.813v9.46z"
                  : "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              }
            />
          </svg>
        );
      })}
    </div>
  );
};
