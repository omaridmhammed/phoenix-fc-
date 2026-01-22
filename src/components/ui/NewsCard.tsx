import { NewsPost } from '@/types';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { format } from 'date-fns';
import { enUS, fr } from 'date-fns/locale'; // Ensure these are imported if using date-fns
import { useLocale } from 'next-intl';

interface NewsCardProps {
    post: NewsPost;
}

export default function NewsCard({ post }: NewsCardProps) {
    const t = useTranslations('Common');
    const locale = useLocale();
    const dateLocale = locale === 'fr' ? fr : enUS;

    return (
        <div className="group bg-phoenix-black border border-white/10 overflow-hidden flex flex-col h-full rounded-sm hover:border-phoenix-gold/50 transition-colors">
            <div className="aspect-video bg-gray-800 relative overflow-hidden">
                {/* Image placeholder */}
                <div className="absolute inset-0 bg-gray-700 group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-4 left-4 bg-phoenix-gold text-phoenix-black text-xs font-bold px-2 py-1 uppercase">
                    {post.category}
                </span>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <div className="text-gray-500 text-xs font-bold mb-2 uppercase">
                    {format(new Date(post.date), 'PPP', { locale: dateLocale })}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 uppercase leading-tight group-hover:text-phoenix-gold transition-colors">
                    {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                    {post.summary}
                </p>
                <div className="mt-auto">
                    <Link href={`/news/${post.slug}`} className="text-phoenix-gold text-sm font-bold uppercase hover:text-white transition-colors inline-flex items-center gap-2">
                        {t('readMore')} &rarr;
                    </Link>
                </div>
            </div>
        </div>
    );
}
