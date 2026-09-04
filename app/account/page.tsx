export default function Account() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-20">
      <div className="grid gap-8 rounded-[32px] border border-[#e7dcc9] bg-white p-8 shadow-[0_18px_50px_rgba(0,0,0,0.04)] md:grid-cols-[0.9fr_1.1fr] md:p-12">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#b08c46]">Account</p>
          <h1 className="serif mt-4 text-5xl text-[#171412]">My account</h1>
          <p className="mt-5 text-stone-600">Sign in to manage your orders, saved pieces, and delivery details.</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-stone-600">Email</label>
            <input className="input rounded-xl" placeholder="you@example.com" />
          </div>

          <div>
            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-stone-600">Password</label>
            <input className="input rounded-xl" type="password" placeholder="Enter your password" />
          </div>

          <button className="btn btn-dark w-full">Sign in</button>
          <button className="btn btn-light w-full">Create account</button>
        </div>
      </div>
    </main>
  );
}
