import { useTranslations } from 'next-intl';
import SectionHeader from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';

export default function AcademyPage() {
    const t = useTranslations('Academy');

    return (
        <div className="pt-24 pb-16 min-h-screen bg-phoenix-green/5">
            <div className="container mx-auto px-4">
                <SectionHeader title={t('title')} subtitle={t('subtitle')} />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative h-96 bg-gray-800 rounded-lg overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-gray-600 font-bold uppercase">Training Ground Image</span>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold uppercase text-white mb-6">The Phoenix Philosophy</h3>
                        <p className="text-gray-300 mb-6 text-lg">
                            We believe in developing not just footballers, but athletes with character.
                            Our academy focuses on technical excellence, tactical intelligence, and physical resilience.
                        </p>
                        <ul className="space-y-3 mb-8 text-gray-400">
                            <li>• U10 - U18 Squads</li>
                            <li>• Professional Coaching Staff</li>
                            <li>• Education & Welfare Support</li>
                        </ul>
                        <Button size="lg">{t('join')}</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
