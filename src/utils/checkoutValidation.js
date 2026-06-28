/**
 * Validates all checkout fields.
 *
 * Returns an object containing
 * validation errors for each field.
 */
export function validateCheckoutForm(formData) {
  const errors = {};

  if (!formData.fullName.trim()) {
    errors.fullName = "Full name is required.";
  }

  if (!formData.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Enter a valid email.";
  }

  if (!formData.address.trim()) {
    errors.address = "Address is required.";
  }

  if (!formData.phone.trim()) {
    errors.phone = "Phone number is required.";
  }

  if (!formData.cardName.trim()) {
    errors.cardName = "Name on card is required.";
  }

  const cardNumber = formData.cardNumber.replace(/\s/g, "");

  if (!cardNumber) {
    errors.cardNumber = "Card number is required.";
  } else if (!/^\d{16}$/.test(cardNumber)) {
    errors.cardNumber = "Card number must be 16 digits.";
  }

  if (!formData.expiryDate.trim()) {
    errors.expiryDate = "Expiry date is required.";
  } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiryDate)) {
    errors.expiryDate = "Use MM/YY format.";
  }

  if (!formData.cvv.trim()) {
    errors.cvv = "CVV is required.";
  } else if (!/^\d{3,4}$/.test(formData.cvv)) {
    errors.cvv = "CVV must be 3 or 4 digits.";
  }

  return errors;
}

export function validateCheckoutField(name, value) {
  switch (name) {
    case "fullName":
      return value.trim() ? "" : "Full name is required.";

    case "email":
      if (!value.trim()) return "Email is required.";
      if (!/\S+@\S+\.\S+/.test(value)) return "Enter a valid email.";
      return "";

    case "address":
      return value.trim() ? "" : "Address is required.";

    case "phone":
      return value.trim() ? "" : "Phone number is required.";

    case "cardName":
      return value.trim() ? "" : "Name on card is required.";

    case "cardNumber": {
      const cardNumber = value.replace(/\s/g, "");
      if (!cardNumber) return "Card number is required.";
      if (!/^\d{16}$/.test(cardNumber)) return "Card number must be 16 digits.";
      return "";
    }

    case "expiryDate":
      if (!value.trim()) return "Expiry date is required.";
      if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(value)) return "Use MM/YY format.";
      return "";

    case "cvv":
      if (!value.trim()) return "CVV is required.";
      if (!/^\d{3,4}$/.test(value)) return "CVV must be 3 or 4 digits.";
      return "";

    default:
      return "";
  }
}
