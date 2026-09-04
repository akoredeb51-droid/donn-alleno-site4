import { Bodoni_Moda, Space_Grotesk } from 'next/font/google';
import Header from './components/Header';
import Link from 'next/link';

const displayFont = Bodoni_Moda({
	variable: '--font-display',
	subsets: ['latin'],
	weight: ['500', '600', '700'],
});

const bodyFont = Space_Grotesk({
	variable: '--font-body',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});
export const metadata={title:'DONN ALLENO | Sartorial Excellence',description:'Luxury Nigerian senator wear and suits.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={`${displayFont.variable} ${bodyFont.variable}`}><Header/>{children}<footer className="mt-24 border-t border-[#26486c] bg-[#041226] text-white"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4"><div><img src="/images/logo.png" alt="DONN ALLENO Sartorial" className="h-24 w-24 rounded-full object-cover ring-1 ring-[#f58220]/70" /><div className="serif mt-5 text-2xl tracking-[.14em]">DONN <span className="gold">ALLENO</span></div><p className="mt-4 text-sm leading-7 text-[#9fb2ca]">Modern Nigerian menswear, refined to perfection.</p></div><div><h4 className="gold uppercase text-xs tracking-[.18em]">Explore</h4><div className="mt-4 grid gap-3 text-sm text-[#dbe7f5]"><Link href="/shop">Shop</Link><Link href="/about">About DONN ALLENO</Link><Link href="/track">Track Order</Link></div></div><div><h4 className="gold uppercase text-xs tracking-[.18em]">Help</h4><div className="mt-4 grid gap-3 text-sm text-[#dbe7f5]"><Link href="/faq">FAQ</Link><Link href="/shipping">Shipping</Link><Link href="/returns">Returns</Link><Link href="/contact">Contact</Link></div></div><div><h4 className="gold uppercase text-xs tracking-[.18em]">Connect</h4><p className="mt-4 text-sm text-[#9fb2ca]">WhatsApp: 07030614208</p><a href="https://wa.me/2347030614208" target="_blank" rel="noreferrer" className="mt-4 inline-flex border-b border-[#f58220] pb-1 text-sm text-[#ffd2aa]">Chat with us directly</a><p className="mt-4 text-sm text-[#9fb2ca]">Instagram / TikTok / Facebook: @donnalleno_sartorial</p></div></div><div className="border-t border-white/10 py-5 text-center text-xs text-[#7187a2]">© {new Date().getFullYear()} DONN ALLENO. All rights reserved.</div></footer><a href="https://wa.me/2347030614208?text=Hello%20DONN%20ALLENO%2C%20I%20need%20help%20with%20an%20order." target="_blank" rel="noreferrer" className="whatsapp-float" aria-label="Chat with DONN ALLENO on WhatsApp" title="Chat with us on WhatsApp"><span aria-hidden="true">✆</span> WhatsApp</a></body></html>}
