export default function ProductDetailsSkeleton() {
    return (
      <div className="grid animate-pulse gap-10 rounded-xl bg-white p-8 shadow-sm md:grid-cols-2">
        <div className="h-[420px] rounded-lg bg-slate-200" />
  
        <div className="flex flex-col justify-center">
          <div className="mb-3 h-4 w-32 rounded bg-slate-200" />
  
          <div className="h-8 w-3/4 rounded bg-slate-200" />
  
          <div className="mt-4 h-8 w-24 rounded bg-slate-200" />
  
          <div className="mt-6 space-y-3">
            <div className="h-4 w-full rounded bg-slate-200" />
            <div className="h-4 w-full rounded bg-slate-200" />
            <div className="h-4 w-5/6 rounded bg-slate-200" />
            <div className="h-4 w-4/6 rounded bg-slate-200" />
          </div>
  
          <div className="mt-8 space-y-3">
            <div className="h-10 w-40 rounded-lg bg-slate-200" />
            <div className="h-10 w-52 rounded-lg bg-slate-200" />
          </div>
        </div>
      </div>
    );
  }