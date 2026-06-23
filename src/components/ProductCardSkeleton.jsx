export default function ProductCardSkeleton() {
    return (
      <div className="flex h-full animate-pulse flex-col rounded-xl bg-white p-4 shadow-sm">
        <div className="flex h-48 items-center justify-center rounded-lg bg-slate-200" />
  
        <div className="mt-4 space-y-3">
          <div className="h-3 w-24 rounded bg-slate-200" />
          <div className="h-4 w-full rounded bg-slate-200" />
          <div className="h-4 w-3/4 rounded bg-slate-200" />
          <div className="h-5 w-20 rounded bg-slate-200" />
        </div>
  
        <div className="mt-auto space-y-3 pt-4">
          <div className="mx-auto h-9 w-28 rounded-lg bg-slate-200" />
          <div className="h-10 w-full rounded-lg bg-slate-200" />
        </div>
      </div>
    );
  }