'use client';

import { useState } from 'react';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function Navbar() {
    const t = useTranslations('Navigation');
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: '/', label: t('home') },
        { href: '/team', label: t('team') },
        { href: '/fixtures', label: t('fixtures') },
        { href: '/news', label: t('news') },
        { href: '/club', label: t('club') },
        { href: '/academy', label: t('academy') },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full bg-phoenix-black/95 backdrop-blur-sm border-b border-white/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0">
                        <span className="text-2xl font-bold uppercase tracking-tighter text-phoenix-gold">
                            Phoenix FC
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-white hover:text-phoenix-gold px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wide transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <LocaleSwitcher />
                        <Button size="sm" variant="primary">
                            {t('tickets')}
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center gap-4">
                        <LocaleSwitcher />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-phoenix-gold focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <X className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-phoenix-black border-b border-white/10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-white hover:text-phoenix-gold block px-3 py-2 rounded-md text-base font-bold uppercase"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="px-3 py-2">
                            <Button size="sm" variant="primary" className="w-full">
                                {t('tickets')}
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
