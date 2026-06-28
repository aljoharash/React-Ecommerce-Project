import { Link } from "react-router-dom";
import AddToCartControl from "./AddToCartControl.jsx";
import { Heart } from "lucide-react";
import { useWishlist } from "../context/WishlistContext.jsx";

function capitalizeWords(text) {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function ProductCard({ product }) {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const liked = isInWishlist(product.id);

  return (
    <div className="relative flex h-full flex-col rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md">
      <button
        onClick={() => toggleWishlist(product)}
        className="absolute right-3 top-3 rounded-full bg-white p-2 shadow-sm transition hover:bg-slate-100"
      >
        <Heart
          size={20}
          className={liked ? "fill-red-500 text-red-500" : "text-slate-500"}
        />
      </button>
      <Link to={`/product/${product.id}`} className="flex flex-1 flex-col">
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
