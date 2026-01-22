import { useTranslations } from 'next-intl';
import SectionHeader from '@/components/ui/SectionHeader';
import MatchCard from '@/components/ui/MatchCard';
import { upcomingMatches, pastMatches } from '@/data/matches';

export default function FixturesPage() {
    const t = useTranslations('Navigation');
    const commonT = useTranslations('Common');

    return (
        <div className="pt-24 pb-16 bg-phoenix-black min-h-screen">
            <div className="container mx-auto px-4">
                <SectionHeader title={t('fixtures')} subtitle="Upcoming matches and past results." />

                <div className="max-w-4xl mx-auto space-y-12">
                    <section>
                        <h3 className="text-xl font-bold text-phoenix-gold uppercase mb-6">Upcoming</h3>
                        <div className="space-y-4">
                            {upcomingMatches.map(match => (
                                <MatchCard key={match.id} match={match} />
                            ))}
                        </div>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-gray-400 uppercase mb-6">Results</h3>
                        <div className="space-y-4 opacity-75 hover:opacity-100 transition-opacity">
                            {pastMatches.map(match => (
                                <MatchCard key={match.id} match={match} />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
