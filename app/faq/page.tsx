const faqs = [
  {
    q: 'How long does delivery take?',
    a: 'Delivery times vary by location, but most orders are prepared and dispatched within a few business days. Final shipping details are confirmed via WhatsApp after purchase.',
  },
  {
    q: 'Do you offer custom sizing?',
    a: 'Yes. For tailored fits and special requests, we recommend contacting us directly so we can guide you through the correct sizing and your preferred style details.',
  },
  {
    q: 'Can I pay on delivery?',
    a: 'Yes. Cash on delivery and secure online payment options are available depending on your order and location.',
  },
  {
    q: 'What is your return policy?',
    a: 'We want every customer to feel confident in their order. If there is a production issue or wrong item sent, reach out to us for support and resolution.',
  },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-20">
      <div className="rounded-[32px] border border-[#e7dcc9] bg-white p-8 shadow-[0_18px_50px_rgba(0,0,0,0.04)] md:p-12">
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#b08c46]">DONN ALLENO</p>
        <h1 className="serif mt-4 text-5xl text-[#171412] md:text-6xl">FAQ</h1>

        <div className="mt-10 space-y-5">
          {faqs.map((item) => (
            <div key={item.q} className="rounded-[22px] border border-[#e7dcc9] bg-[#f9f5f0] p-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#b08c46]">Question</p>
              <h2 className="mt-3 text-2xl text-[#171412]">{item.q}</h2>
              <p className="mt-4 text-stone-600 leading-7">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
