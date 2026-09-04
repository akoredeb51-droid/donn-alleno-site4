export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-20">
      <div className="rounded-[32px] border border-[#e7dcc9] bg-white p-8 shadow-[0_18px_50px_rgba(0,0,0,0.04)] md:p-12">
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#b08c46]">DONN ALLENO</p>
        <h1 className="serif mt-4 text-5xl text-[#171412] md:text-6xl">Contact</h1>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="space-y-5 text-stone-600 leading-8">
            <p>We build refined menswear for the modern gentleman, with a focus on tailored silhouettes, premium fabrics, and confident everyday dressing.</p>
            <p>For questions about sizing, availability, delivery, or orders, contact us on WhatsApp at 07030614208. Nationwide delivery is available, and shipping charges are confirmed according to your location.</p>
          </div>

          <div className="space-y-4 rounded-[24px] bg-[#f5f1ea] p-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">WhatsApp</p>
              <p className="mt-2 text-xl font-medium text-[#171412]">07030614208</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">Instagram</p>
              <p className="mt-2 text-xl font-medium text-[#171412]">@donnalleno_sartorial</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
