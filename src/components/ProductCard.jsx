import { Link } from "react-router-dom";
import AddToCartControl from "./AddToCartControl.jsx";

function capitalizeWords(text) {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function ProductCard({ product }) {
  return (
    <div className="flex h-full flex-col rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md">
      <Link to={`/product/${product.id}`}
      className="flex flex-1 flex-col">
        <div className="flex h-48 items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-full object-contain"
          />
        </div>

        <div className="mt-4 space-y-2">
          <p className="text-sm text-slate-500">
            {capitalizeWords(product.category)}
          </p>

          <h3 className="line-clamp-2 font-semibold text-slate-900">
            {product.title}
          </h3>

          <p className="text-lg font-bold text-indigo-600">${product.price}</p>
        </div>
      </Link>
      <AddToCartControl product={product} />
    </div>
  );
}
