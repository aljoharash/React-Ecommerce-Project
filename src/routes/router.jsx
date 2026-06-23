import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../ui/RootLayout.jsx";
import HomePage from "../pages/HomePage.jsx";
import ProductDetailsPage from "../pages/ProductDetailsPage.jsx";
import CartPage from "../pages/CartPage.jsx";
import CheckoutPage from "../pages/CheckoutPage.jsx";
import OrderSummaryPage from "../pages/OrderSummaryPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import PaymentProcessingPage from "../pages/PaymentProcessingPage.jsx";
import WishlistPage from "../pages/WishlistPage.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "product/:id", element: <ProductDetailsPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "checkout", element: <CheckoutPage /> },
      { path: "order-summary", element: <OrderSummaryPage /> },
      { path: "payment-processing", element: <PaymentProcessingPage /> },
      { path: "wishlist", element: <WishlistPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);