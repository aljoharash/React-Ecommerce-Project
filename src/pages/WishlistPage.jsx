import { Link } from "react-router-dom";
import ProductGrid from "../components/ProductGrid.jsx";
import { useWishlist } from "../context/WishlistContext.jsx";

export default function WishlistPage() {
  const { wishlistItems } = useWishlist();

  if (wishlistItems.length === 0) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-slate-900">
          Your wishlist is empty
        </h1>

        <p className="mt-3 text-slate-500">
          Save your favorite products here.
        </p>

        <Link
          to="/"
          className="mt-6 rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">Wishlist</h1>
      <ProductGrid products={wishlistItems} />
    </div>
  );
}