import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './components/header';
import './globals.css';
import './devIcons.min.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Open Source Force',
	description: 'An OSF Website.'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="bg-slate-50 dark:bg-slate-900">
				<Header />
				{children}
			</body>
		</html>
	);
}
