import { useTranslations } from 'next-intl';
import SectionHeader from '@/components/ui/SectionHeader';

export default function ClubPage() {
    const t = useTranslations('Club');

    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="container mx-auto px-4">
                <SectionHeader title={t('title')} subtitle="Founded in 2024, Phoenix FC rose from the ashes to conquer the league." />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-300">
                    <div>
                        <h3 className="text-2xl font-bold uppercase text-phoenix-gold mb-4">{t('stadium')}</h3>
                        <p className="mb-4">
                            Our home, The Fire Pit, is a state-of-the-art facility accommodating 50,000 passionate fans.
                            With its steep stands and acoustic design, the atmosphere is unmatched.
                        </p>
                        <div className="bg-gray-800 h-64 w-full flex items-center justify-center rounded-lg">
                            <span className="text-gray-600 font-bold uppercase">Stadium Image Placeholder</span>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold uppercase text-phoenix-gold mb-4">{t('values')}</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="w-2 h-2 mt-2 mr-3 bg-phoenix-gold rounded-full"></span>
                                <span><strong className="text-white block">Resilience</strong> We never give up. We fight until the final whistle.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 mt-2 mr-3 bg-phoenix-gold rounded-full"></span>
                                <span><strong className="text-white block">Community</strong> The club belongs to the fans.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 mt-2 mr-3 bg-phoenix-gold rounded-full"></span>
                                <span><strong className="text-white block">Excellence</strong> We strive for perfection in everything we do.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
