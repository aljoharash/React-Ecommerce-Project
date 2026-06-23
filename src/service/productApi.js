const BASE_URL = "https://fakestoreapi.com";

async function handleResponse(response, errorMessage) {
  console.log("API Response:", response);

  if (!response.ok) {
    console.error(errorMessage, {
      status: response.status,
      statusText: response.statusText,
    });

    throw new Error(`${errorMessage}. Status: ${response.status}`);
  }

  const data = await response.json();
  console.log("API Data:", data);

  return data;
}

export async function getProducts() {
  try {
    console.log("Fetching products...");

    const response = await fetch(`${BASE_URL}/products`);
    return await handleResponse(response, "Failed to fetch products");
  } catch (error) {
    console.error("getProducts error:", error.message);
    throw error;
  }
}

export async function getProductById(id) {
  try {
    console.log("Fetching product by ID:", id);

    const response = await fetch(`${BASE_URL}/products/${id}`);
    return await handleResponse(response, "Failed to fetch product details");
  } catch (error) {
    console.error("getProductById error:", error.message);
    throw error;
  }
}

export async function getCategories() {
  const response = await fetch(`${BASE_URL}/products/categories`);
  return handleResponse(response, "Failed to fetch categories");
}
