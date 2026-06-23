import { useState } from "react";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext.jsx";

export default function AddToCartControl({ product }) {
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  function decreaseQuantity() {
    setQuantity((current) => Math.max(1, current - 1));
  }

  function increaseQuantity() {
    setQuantity((current) => Math.min(5, current + 1));
  }

  return (
    <div className="mt-4 space-y-3">
      <div className="flex items-center justify-center">
        <div className="flex items-center rounded-lg border border-slate-300">
          <button
            onClick={decreaseQuantity}
            className="px-3 py-2 transition hover:bg-slate-100"
          >
            <Minus size={16} />
          </button>

          <span className="min-w-[40px] text-center font-medium">
            {quantity}
          </span>

          <button
            onClick={increaseQuantity}
            className="px-3 py-2 transition hover:bg-slate-100"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      <button
        onClick={() => addToCart(product, quantity)}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white transition hover:bg-indigo-700"
      >
        <ShoppingCart size={18} />
        Add to Cart
      </button>
    </div>
  );
}