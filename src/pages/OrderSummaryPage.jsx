import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export default function OrderSummaryPage() {
  const orderNumber = Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="max-w-xl rounded-xl bg-white p-8 text-center shadow-sm">
        <CheckCircle className="mx-auto text-green-600" size={72} />

        <h1 className="mt-6 text-3xl font-bold text-slate-900">
          Order Confirmed
        </h1>

        <p className="mt-3 text-slate-500">
          Thank you for shopping with Estore.
        </p>

        <div className="mt-6 rounded-lg bg-slate-50 p-4">
          <p className="text-sm text-slate-500">Order Number</p>
          <p className="mt-1 text-xl font-bold text-indigo-600">
            #{orderNumber}
          </p>
        </div>

        <Link
          to="/"
          className="mt-6 inline-block rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}