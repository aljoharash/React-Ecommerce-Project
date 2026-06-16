import { useEffect } from "react";
import { getProducts } from "../services/productApi";

export default function HomePage() {
  useEffect(() => {
    async function testApi() {
      try {
        const products = await getProducts();
        console.log("Products received in HomePage:", products);
      } catch (error) {
        console.error("HomePage API test failed:", error.message);
      }
    }

    testApi();
  }, []);

  return <h1>Home Page</h1>;
}