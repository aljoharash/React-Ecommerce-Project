import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header>
        <Link to="/">
          <h1>React Store</h1>
        </Link>

        <Link to="/cart">
          Cart
        </Link>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}