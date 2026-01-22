import { useTranslations } from 'next-intl';
import Hero from '@/components/sections/Hero';
import SectionHeader from '@/components/ui/SectionHeader';
import MatchCard from '@/components/ui/MatchCard';
import NewsCard from '@/components/ui/NewsCard';
import PlayerCard from '@/components/ui/PlayerCard';
import SponsorStrip from '@/components/sections/SponsorStrip';
import { upcomingMatches } from '@/data/matches';
import { news } from '@/data/news';
import { players } from '@/data/players';
import { Button } from '@/components/ui/Button';

export default function HomePage() {
  const t = useTranslations('Home');
  const commonT = useTranslations('Common');

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* Next Match Section */}
      <section className="py-16 md:py-24 bg-phoenix-black relative">
        <div className="container mx-auto px-4">
          <SectionHeader title={t('nextMatch')} subtitle="Don't miss the action. Secure your seat today." />
          <div className="max-w-4xl mx-auto">
            {upcomingMatches.length > 0 && (
              <MatchCard match={upcomingMatches[0]} featured={true} />
            )}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 md:py-24 bg-phoenix-green/5">
        <div className="container mx-auto px-4">
          <SectionHeader title={t('latestNews')} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((post) => (
              <NewsCard key={post.id} post={post} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline">{commonT('readMore')}</Button>
          </div>
        </div>
      </section>

      {/* Featured Players */}
      <section className="py-16 md:py-24 bg-phoenix-black">
        <div className="container mx-auto px-4">
          <SectionHeader title={t('featuredPlayers')} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {players.slice(0, 4).map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="secondary">{t('joinUs')}</Button>
          </div>
        </div>
      </section>

      <SponsorStrip />
    </div>
  );
}
