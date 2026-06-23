import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <AppHeader />

      <main className="mx-auto max-w-7xl px-6 py-8">
        <Outlet />
      </main>
    </div>
  );
}