import { FC } from "react";

interface Props {
  currentValue: number;
  maxValue: number;
  updatedQuantity: (newValue: number) => void;
}

export const ItemCounter: FC<Props> = ({
  currentValue,
  maxValue,
  updatedQuantity,
}) => {
  const addOrRemove = (value: number) => {
    if (value === -1) {
      if (currentValue === 1) return;
      return updatedQuantity(currentValue - 1);
    }

    if (currentValue >= maxValue) return;
    updatedQuantity(currentValue + 1);
  };
  return (
    <div className="flex sm:items-center sm:justify-center w-full">
      <button
        onClick={() => addOrRemove(-1)}
        className="group py-4 px-6 border border-gray-400 rounded-l-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300"
      >
        <svg
          className="stroke-gray-900 group-hover:stroke-black"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5 11H5.5"
            stroke=""
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M16.5 11H5.5"
            stroke=""
            strokeOpacity="0.2"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M16.5 11H5.5"
            stroke=""
            strokeOpacity="0.2"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <input
        type="text"
        disabled
        className="font-semibold text-gray-900 cursor-pointer text-lg py-[13px] px-6 w-full sm:max-w-[118px] outline-0 border-y border-gray-400 bg-transparent placeholder:text-gray-900 text-center hover:bg-gray-50"
        placeholder={`${currentValue}`}
      />
      <button
        onClick={() => addOrRemove(+1)}
        className="group py-4 px-6 border border-gray-400 rounded-r-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300"
      >
        <svg
          className="stroke-gray-900 group-hover:stroke-black"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 5.5V16.5M16.5 11H5.5"
            stroke="#9CA3AF"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M11 5.5V16.5M16.5 11H5.5"
            stroke="black"
            strokeOpacity="0.2"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M11 5.5V16.5M16.5 11H5.5"
            stroke="black"
            strokeOpacity="0.2"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
};
