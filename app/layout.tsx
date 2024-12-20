import type { Metadata } from 'next';
import './globals.css';
import Topbar from '@/components/topbar';
import Header from '@/components/header';

export const metadata: Metadata = {
    title: '',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Topbar />
                <Header/>
                {children}
            </body>
        </html>
    );
}
