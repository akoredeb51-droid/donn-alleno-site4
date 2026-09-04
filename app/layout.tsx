import { Bodoni_Moda, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

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
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${displayFont.variable} ${bodyFont.variable}`}>
				<Header />
				{children}
				<Footer />
				<a
					href="https://wa.me/2347030614208?text=Hello%20DONN%20ALLENO%2C%20I%20need%20help%20with%20an%20order."
					target="_blank"
					rel="noreferrer"
					className="whatsapp-float"
					aria-label="Chat with DONN ALLENO on WhatsApp"
					title="Chat with us on WhatsApp"
				>
					<span aria-hidden="true">✆</span> WhatsApp
				</a>
			</body>
		</html>
	);
}
