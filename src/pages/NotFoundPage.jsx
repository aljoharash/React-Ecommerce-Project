import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <ShoppingBag size={72} className="mb-6 text-indigo-500" />

      <h1 className="mb-2 text-5xl font-bold text-slate-900">404</h1>

      <h2 className="mb-4 text-2xl font-semibold text-slate-700">
        Page Not Found
      </h2>

      <p className="mb-8 max-w-md text-slate-500">
        Sorry, we couldn't find the page you're looking for.
      </p>

      <Link
        to="/"
        className="rounded-lg bg-indigo-500 px-6 py-3 font-medium text-white transition hover:bg-indigo-700"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
