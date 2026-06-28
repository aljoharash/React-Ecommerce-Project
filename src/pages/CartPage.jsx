import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext.jsx";
import QuantityStepper from "../components/QuantityStepper.jsx";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-slate-900">
          Your cart is empty
        </h1>

        <p className="mt-3 text-slate-500">
          Add some products to start shopping.
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
      <h1 className="text-3xl font-bold text-slate-900">Shopping Cart</h1>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 rounded-xl bg-white p-4 shadow-sm"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-24 w-24 object-contain"
              />

              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <h2 className="font-semibold text-slate-900">{item.title}</h2>
                  <p className="mt-1 text-indigo-600">${item.price}</p>
                  <div className = "max-w-30">
                    <QuantityStepper
                      quantity={item.quantity}
                      onDecrease={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      onIncrease={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                    />
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-3 flex w-fit items-center gap-2 text-sm text-red-600 hover:text-red-700"
                >
                  <Trash2 size={16} />
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="h-fit rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Order Summary</h2>

          <div className="mt-4 flex justify-between text-slate-600">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <Link
            to="/checkout"
            className="mt-6 block rounded-lg bg-indigo-600 px-4 py-3 text-center font-medium text-white transition hover:bg-indigo-700"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
