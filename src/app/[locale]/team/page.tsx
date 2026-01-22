import { useTranslations } from 'next-intl';
import SectionHeader from '@/components/ui/SectionHeader';
import PlayerCard from '@/components/ui/PlayerCard';
import { players } from '@/data/players';

export default function TeamPage() {
    const t = useTranslations('Navigation');

    const gks = players.filter(p => p.position === 'GK');
    const defs = players.filter(p => p.position === 'DEF');
    const mids = players.filter(p => p.position === 'MID');
    const fwds = players.filter(p => p.position === 'FWD');

    return (
        <div className="pt-24 pb-16 bg-phoenix-green/5 min-h-screen">
            <div className="container mx-auto px-4">
                <SectionHeader title={t('team')} subtitle="The squad fighting for the crest." />

                <div className="space-y-16">
                    {/* Goalkeepers */}
                    <section>
                        <h3 className="text-2xl font-bold uppercase tracking-wider text-white mb-8 border-l-4 border-phoenix-gold pl-4">Goalkeepers</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {gks.map(player => <PlayerCard key={player.id} player={player} />)}
                        </div>
                    </section>

                    {/* Defenders */}
                    <section>
                        <h3 className="text-2xl font-bold uppercase tracking-wider text-white mb-8 border-l-4 border-phoenix-gold pl-4">Defenders</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {defs.map(player => <PlayerCard key={player.id} player={player} />)}
                        </div>
                    </section>

                    {/* Midfielders */}
                    <section>
                        <h3 className="text-2xl font-bold uppercase tracking-wider text-white mb-8 border-l-4 border-phoenix-gold pl-4">Midfielders</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {mids.map(player => <PlayerCard key={player.id} player={player} />)}
                        </div>
                    </section>

                    {/* Forwards */}
                    <section>
                        <h3 className="text-2xl font-bold uppercase tracking-wider text-white mb-8 border-l-4 border-phoenix-gold pl-4">Forwards</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {fwds.map(player => <PlayerCard key={player.id} player={player} />)}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
