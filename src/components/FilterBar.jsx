import { ChevronDown } from "lucide-react";

function capitalizeWords(text) {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function FilterBar({
  categories,
  category,
  onCategoryChange,
  sortBy,
  onSortChange,
}) {
  return (
    <div className="flex gap-4">
      <div className="relative">
        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="appearance-none rounded-lg border border-slate-300 bg-white px-4 py-3 pr-10 text-indigo-700"
        >
          <option value="all">Filter by Category</option>

          {categories.map((categoryName) => (
            <option key={categoryName} value={categoryName}>
              {capitalizeWords(categoryName)}
            </option>
          ))}
        </select>

        <ChevronDown
          size={18}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
        />
      </div>

      <div className="relative">
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="appearance-none rounded-lg border border-slate-300 bg-white px-4 py-3 pr-10 text-indigo-700"
        >
          <option value="default">Sort Products</option>

          <option value="price-low-high">Price: Low to High</option>

          <option value="price-high-low">Price: High to Low</option>

          <option value="name-a-z">Name: A-Z</option>

          <option value="name-z-a">Name: Z-A</option>
        </select>

        <ChevronDown
          size={18}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
}
