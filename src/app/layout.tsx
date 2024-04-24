import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './_components/header';
import './globals.css';
import './_fonts/devIcons.min.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: { default: 'Open Source Force', template: '%s | Open Source Force' },
	description:
		'A community of open source enthusiasts working together to innovate and inspire.',
	generator: 'Next.js',
	referrer: 'origin-when-cross-origin',
	keywords: [
		'open source',
		'community',
		'innovation',
		'inspiration',
		'code',
		'development',
		'devs',
		'developers',
		'discord'
	],
	authors: [
		{
			name: 'Akhil Pillai',
			url: 'https://akpi.is-a.dev/'
		}
	],
	creator: 'Open Source Force',
	publisher: 'Open Source Force',
	// formatDetection: {
	// 	address: false,
	// 	date: false,
	// 	email: false,
	// 	telephone: false,
	// 	url: false
	// },
	openGraph: {
		title: 'Open Source Force',
		description:
			'A community of open source enthusiasts working together to innovate and inspire.',
		url: 'https://opensourceforce.net/',
		type: 'website',
		locale: 'en_US'
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false
		}
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Open Source Force',
		description:
			'A community of open source enthusiasts working together to innovate and inspire.'
		// images: ['https://opensourceforce.net/twitter-image.png']
	},
	alternates: {
		canonical: 'https://opensourceforce.net/'
	},
	category: ''
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className='bg-slate-50 dark:bg-slate-900'>
				<Header />
				{children}
			</body>
		</html>
	);
}
