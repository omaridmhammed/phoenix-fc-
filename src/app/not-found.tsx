'use client';

import Link from 'next/link';

export default function NotFound() {
    return (
        <html lang="en">
            <body className="bg-phoenix-black text-white flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                <p className="mb-8">Sorry, we couldn't find the page you were looking for.</p>
                <Link href="/" className="text-phoenix-gold hover:underline">
                    Return Home
                </Link>
            </body>
        </html>
    );
}
