import type { Metadata } from 'next';
import { Patrick_Hand } from 'next/font/google';
import './globals.scss';

const patrickHand = Patrick_Hand({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
    title: 'My commerce site',
    description: 'Generated by create next app',
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={patrickHand.className}>{children}</body>
        </html>
    );
}
