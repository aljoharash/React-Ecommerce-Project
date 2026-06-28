# EStore

## Overview

EStore is a React-based e-commerce web application developed to demonstrate modern frontend development practices. The application allows users to browse products, view product details, manage a shopping cart and wishlist, complete a simulated checkout process, and receive an order confirmation. It emphasizes reusable components, responsive design, API integration, and clean project architecture.

---

## Features

- Product Listing
- Product Details
- Product Search
- Category Filtering
- Product Sorting
- Shopping Cart
- Wishlist
- Order Confirmation

---

## Technologies Used

- React
- Vite
- React Router
- Tailwind CSS
- Context API
- Fake Store API
- Lucide React Icons

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## Features Description

### Home Page

- Displays all available products
- Search products
- Filter by category
- Sort products
- Navigate to product details

### Product Details

- View complete product information
- Add products to cart
- Add or remove products from wishlist

### Shopping Cart

- View selected products
- Update quantities
- Remove products
- View order subtotal
- Proceed to checkout

### Wishlist

- Save favorite products
- Remove products from wishlist
- Navigate to product details

### Checkout

- Collect customer information
- Collect payment details
- Validate all fields
- Display order summary

### Payment Processing

- Simulate payment processing
- Display loading animation
- Clear shopping cart after successful payment

### Order Summary

- Display successful order confirmation
- Generate an order number
- Continue shopping

---

## API

The application uses the **Fake Store API** to retrieve product information.

API Endpoints:

- Get Products
- Get Product by ID
- Get Categories

---

## State Management

The application uses React Context API for global state management.

### Cart Context

- Add items
- Remove items
- Update quantities
- Clear cart
- Persist cart using Local Storage

### Wishlist Context

- Add products
- Remove products
- Persist wishlist using Local Storage

---

## Validation

Checkout validation includes:

- Required fields
- Email validation
- Card number validation
- Expiry date validation
- CVV validation

---

## Loading States

The application provides loading skeletons for:

- Product Grid
- Product Details

These improve the user experience while data is being retrieved.

---

## Error Handling

The application handles:

- Invalid product IDs
- Failed API requests
- Unknown routes

Users are redirected to a custom **Not Found** page when appropriate.

---

## Responsive Design

The application is responsive across:

- Mobile
- Tablet
- Desktop

---

## Testing

The application was manually tested to verify:

- Product loading
- Search functionality
- Category filtering
- Product sorting
- Pagination
- Product details
- Wishlist functionality
- Shopping cart operations
- Quantity updates
- Checkout validation
- Payment processing
- Order confirmation
- Local Storage persistence
- Responsive layout
- Error handling

---

## Future Enhancements

- User authentication
- Product reviews and ratings
- Order history
- Payment gateway integration
- Product recommendations
- Dark mode
- Unit and integration testing
- Backend integration
