import { Link } from "react-router-dom";
import { Heart, ShoppingBag, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function AppHeader() {
  const {cartItemCount} = useCart();

  return (
    <header className="bg-indigo-500 shadow-md">
      <div className="mx-auto flex h-25 max-w-7xl items-center justify-between px-15">
        <Link
          to="/"
          className="flex items-center gap-2 font-semibold tracking-tight text-white"
        >
          <ShoppingBag size={30} />
          <div className="flex items-center gap-0">
            <span className="text-4xl font-bold">E</span>
            <span className="text-indigo-950 text-2xl">store.</span>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            to="/wishlist"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-white transition hover:bg-blue-800"
          >
            <Heart size={20} />
            <span className="text-sm font-medium">Wishlist</span>
          </Link>

          <Link
            to="/cart"
            className="relative rounded-full p-2 text-white transition hover:bg-blue-800"
          >
            <ShoppingCart size={24} />

            {cartItemCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[10px] font-bold text-indigo-600">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
