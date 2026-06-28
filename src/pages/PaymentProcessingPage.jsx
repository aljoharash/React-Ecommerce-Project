import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../ui/LoadingSpinner.jsx";
import { useCart } from "../context/CartContext.jsx";

export default function PaymentProcessingPage() {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  useEffect(() => {
    const timer = setTimeout(() => {
      clearCart();
      navigate("/order-summary");
    }, 4000);

    return () => clearTimeout(timer);
  }, [clearCart, navigate]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <LoadingSpinner />

      <h1 className="mt-6 text-3xl font-bold text-slate-900">
        Processing Payment
      </h1>

      <p className="mt-3 max-w-md text-slate-500">
        Please wait while we confirm your payment. Do not close this page.
      </p>
    </div>
  );
}
