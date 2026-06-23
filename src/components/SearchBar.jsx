import { Search } from "lucide-react";

export default function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="relative w-80">
      <Search
        size={18}
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
      />

      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full rounded-lg border border-slate-300 bg-white py-3 pl-10 pr-4 outline-none transition focus:border-indigo-500"
      />
    </div>
  );
}
