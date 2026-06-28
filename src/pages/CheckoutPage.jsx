import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useCart } from "../context/CartContext.jsx";
import {
  validateCheckoutForm,
  validateCheckoutField,
} from "../utils/checkoutValidation.js";

import visaLogo from "../assets/Visa-logo.png";
import mastercardLogo from "../assets/Mastercard-logo.png";
import amexLogo from "../assets/Amex-logo.png";

/**
 * Checkout Page
 *
 * Collects customer information
 * and validates payment details
 * before proceeding to payment.
 */

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    phone: "",
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    const fieldError = validateCheckoutField(name, value);

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: fieldError,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (cartItems.length === 0) {
      navigate("/cart");
      return;
    }

    const validationErrors = validateCheckoutForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    navigate("/payment-processing");
  }

  function inputClass(fieldName) {
    return `w-full rounded-lg border px-4 py-3 outline-none transition focus:border-indigo-500 ${
      errors[fieldName] ? "border-red-500" : "border-slate-300"
    }`;
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
      <form
        onSubmit={handleSubmit}
        className="rounded-xl bg-white p-6 shadow-sm"
      >
        <h1 className="text-3xl font-bold text-slate-900">Checkout</h1>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-slate-900">
            Customer Details
          </h2>

          <div className="mt-4 space-y-4">
            <FieldError error={errors.fullName}>
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className={inputClass("fullName")}
              />
            </FieldError>

            <FieldError error={errors.email}>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className={inputClass("email")}
              />
            </FieldError>

            <FieldError error={errors.address}>
              <input
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Delivery Address"
                className={inputClass("address")}
              />
            </FieldError>

            <FieldError error={errors.phone}>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className={inputClass("phone")}
              />
            </FieldError>
          </div>
        </section>

        <section className="mt-8 border-t pt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-900">
              Card Details
            </h2>

            <div className="flex items-center gap-3">
              <img src={visaLogo} alt="Visa" className="h-6 object-contain" />
              <img
                src={mastercardLogo}
                alt="Mastercard"
                className="h-6 object-contain"
              />
              <img
                src={amexLogo}
                alt="American Express"
                className="h-6 object-contain"
              />
            </div>
          </div>

          <div className="mt-4 space-y-4">
            <FieldError error={errors.cardName}>
              <input
                name="cardName"
                value={formData.cardName}
                onChange={handleChange}
                placeholder="Name on Card"
                className={inputClass("cardName")}
              />
            </FieldError>

            <FieldError error={errors.cardNumber}>
              <input
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="Card Number"
                maxLength="19"
                className={inputClass("cardNumber")}
              />
            </FieldError>

            <div className="grid gap-4 md:grid-cols-2">
              <FieldError error={errors.expiryDate}>
                <input
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  maxLength="5"
                  className={inputClass("expiryDate")}
                />
              </FieldError>

              <FieldError error={errors.cvv}>
                <input
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  placeholder="CVV"
                  maxLength="4"
                  className={inputClass("cvv")}
                />
              </FieldError>
            </div>
          </div>
        </section>

        <button
          type="submit"
          className="mt-6 w-full rounded-lg bg-indigo-600 px-4 py-3 font-medium text-white transition hover:bg-indigo-700"
        >
          Place Order
        </button>
      </form>

      <div className="h-fit rounded-xl bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">Order Summary</h2>

        <div className="mt-4 space-y-3">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between gap-4 text-sm">
              <span className="text-slate-600">
                {item.title} × {item.quantity}
              </span>

              <span className="font-medium text-slate-900">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 border-t pt-4">
          <div className="flex justify-between font-bold text-slate-900">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function FieldError({ error, children }) {
  return (
    <div>
      {children}
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
