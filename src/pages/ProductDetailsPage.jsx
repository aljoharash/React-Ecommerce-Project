import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { getProductById } from "../service/productApi.js";
import AddToCartControl from "../components/AddToCartControl.jsx";
import ProductDetailsSkeleton from "../components/ProductDetailsSkeleton.jsx";
import NotFoundPage from "./NotFoundPage.jsx";
import { Heart } from "lucide-react";
import { useWishlist } from "../context/WishlistContext.jsx";

function capitalizeWords(text) {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function ProductDetailsPage() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { toggleWishlist, isInWishlist } = useWishlist();
  const liked = product ? isInWishlist(product.id) : false;

  useEffect(() => {
    async function loadProduct() {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [id]);

  if (loading) {
    return <ProductDetailsSkeleton />;
  }

  if (error) {
    return <NotFoundPage />;
  }

  if (!product) {
    return <p className="text-slate-500">Product not found.</p>;
  }

  return (
    <>
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-indigo-600 transition hover:text-indigo-800"
        >
          <ArrowLeft size={18} />
          Back to Products
        </Link>
      </div>
      <div className="grid gap-10 rounded-xl bg-white p-8 shadow-sm md:grid-cols-2">
        <div className="relative flex items-center justify-center">
          <button
            onClick={() => toggleWishlist(product)}
            className="absolute right-5 top-5 rounded-full bg-white p-2 shadow-sm transition hover:bg-slate-100"
          >
            <Heart
              size={22}
              className={liked ? "fill-red-500 text-red-500" : "text-slate-500"}
            />
          </button>
          <img
            src={product.image}
            alt={product.title}
            className="max-h-[420px] object-contain"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="mb-3 text-sm font-medium text-indigo-600">
            {capitalizeWords(product.category)}
          </p>

          <h1 className="text-3xl font-bold text-slate-900">{product.title}</h1>

          <p className="mt-4 text-2xl font-bold text-indigo-600">
            ${product.price}
          </p>

          <p className="mt-6 leading-7 text-slate-600">{product.description}</p>

          <div className="mt-8 max-w-xs">
            <AddToCartControl product={product} />
          </div>
        </div>
      </div>
    </>
  );
}
