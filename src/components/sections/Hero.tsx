import { Button } from '@/components/ui/Button';
import { useTranslations } from 'next-intl';

export default function Hero() {
    const t = useTranslations('Home');

    return (
        <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 bg-gray-900">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-phoenix-green via-phoenix-green/80 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-phoenix-black/80 to-transparent z-10" />

                {/* Placeholder for real image */}
                <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-50 mix-blend-overlay" />
            </div>

            <div className="container mx-auto px-4 z-20 relative">
                <div className="max-w-3xl">
                    <span className="text-phoenix-gold font-bold tracking-widest uppercase mb-4 block animate-fade-in-up">
                        Est. 2024
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter mb-6 leading-tight">
                        {t('heroTitle')}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-xl">
                        {t('heroSubtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" variant="primary">
                            {t('matchdays')}
                        </Button>
                        <Button size="lg" variant="outline">
                            {t('joinUs')}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
