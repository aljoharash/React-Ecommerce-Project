import { Minus, Plus } from "lucide-react";

export default function QuantityStepper({
  quantity,
  onDecrease,
  onIncrease,
}) {
  return (
    <div className="overflow-hidden flex items-center rounded-lg border border-slate-300">
      <button
        onClick={onDecrease}
        className="px-3 py-2 transition hover:bg-slate-100"
      >
        <Minus size={16} />
      </button>

      <span className="min-w-[40px] text-center font-medium">
        {quantity}
      </span>

      <button
        onClick={onIncrease}
        className="px-3 py-2 transition hover:bg-slate-100"
      >
        <Plus size={16} />
      </button>
    </div>
  );
}