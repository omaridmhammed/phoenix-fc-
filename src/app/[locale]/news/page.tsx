import { useTranslations } from 'next-intl';
import SectionHeader from '@/components/ui/SectionHeader';
import NewsCard from '@/components/ui/NewsCard';
import { news } from '@/data/news';

export default function NewsPage() {
    const t = useTranslations('Navigation');

    return (
        <div className="pt-24 pb-16 bg-phoenix-offwhite min-h-screen">
            <div className="container mx-auto px-4">
                <SectionHeader title={t('news')} subtitle="Latest updates from the club." className="text-phoenix-black" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {news.map((post) => (
                        <NewsCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </div>
    );
}
