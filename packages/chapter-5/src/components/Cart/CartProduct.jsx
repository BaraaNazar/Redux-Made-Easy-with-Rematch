import React from "react";
import { number } from "../../utils/formatters";

export const CartProduct = () => (
  <article role="listitem" className="p-4 flex space-x-4">
    <img
      src="https://via.placeholder.com/150"
      alt="Product"
      loading="lazy"
      className="flex-none w-auto max-w-16 max-h-16 rounded-lg object-cover bg-gray-100"
    />
    <div className="flex-auto">
      <h2 className="text-lg font-semibold text-black under">Utility Jacket</h2>
      <p className="text-sm font-medium text-gray-500">{number(110)}</p>
    </div>
    <div className="flex items-center">
      <button
        aria-label="remove"
        className="w-5 h-5 rounded-md text-gray-400 border border-gray-300 mr-2"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18 12H6"
          />
        </svg>
      </button>
      <div
        aria-label="product quantity"
        className="w-auto p-2 h-7 text-sm flex items-center justify-center rounded-md text-gray-500 border border-gray-300 mr-2"
      >
        0
      </div>
      <button
        aria-label="purchase more"
        className="w-5 h-5 rounded-md text-gray-400 border border-gray-300 mr-2"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
    </div>
  </article>
);
