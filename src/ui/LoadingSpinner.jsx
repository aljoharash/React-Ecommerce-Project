export default function LoadingSpinner({ size = "h-12 w-12" }) {
  return (
    <div
      className={`${size} animate-spin rounded-full border-4 border-slate-200 border-t-indigo-600`}
    />
  );
}
