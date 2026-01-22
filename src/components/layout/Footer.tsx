import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations('Common');

    return (
        <footer className="bg-phoenix-black text-white border-t border-white/10 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <span className="text-2xl font-bold uppercase tracking-tighter text-phoenix-gold block mb-4">
                            Phoenix FC
                        </span>
                        <p className="text-gray-400 max-w-sm">
                            Rise from the ashes. The official website of Phoenix Football Club.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-phoenix-gold mb-4">
                            {t('contact')}
                        </h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>Email: info@phoenixfc.com</li>
                            <li>Phone: +1 (555) 123-4567</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-phoenix-gold mb-4">
                            {t('followUs')}
                        </h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Twitter / X</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Phoenix FC. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
