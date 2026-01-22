import { Match } from '@/types';
import { format } from 'date-fns';
import { enUS, fr } from 'date-fns/locale';
import { useLocale, useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';

interface MatchCardProps {
    match: Match;
    featured?: boolean;
}

export default function MatchCard({ match, featured = false }: MatchCardProps) {
    const t = useTranslations('Common');
    const locale = useLocale();
    const dateLocale = locale === 'fr' ? fr : enUS;

    const matchDate = new Date(match.date + 'T' + match.time);

    return (
        <div className={`relative overflow-hidden rounded-lg border border-white/10 bg-phoenix-black transition-transform hover:-translate-y-1 ${featured ? 'md:col-span-2' : ''}`}>
            {/* Background/Decoration */}
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="text-6xl font-bold text-white outline-text">VS</span>
            </div>

            <div className="p-6 flex flex-col items-center justify-between h-full gap-6">
                <div className="text-center">
                    <h3 className="text-phoenix-gold text-sm font-bold uppercase tracking-wider mb-2">
                        {match.competition}
                    </h3>
                    <p className="text-gray-400 text-sm">
                        {format(matchDate, 'PPP', { locale: dateLocale })} • {match.time}
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                        {match.venue}
                    </p>
                </div>

                <div className="flex items-center justify-center w-full gap-8">
                    <div className="text-center flex-1">
                        <div className="w-16 h-16 mx-auto mb-2 bg-phoenix-green rounded-full flex items-center justify-center border-2 border-phoenix-gold">
                            <span className="font-bold text-xl text-white">PHX</span>
                        </div>
                        <span className="font-bold text-white uppercase block">Phoenix</span>
                    </div>

                    <div className="text-2xl font-bold text-gray-500">VS</div>

                    <div className="text-center flex-1">
                        <div className="w-16 h-16 mx-auto mb-2 bg-gray-800 rounded-full flex items-center justify-center border-2 border-gray-600">
                            <span className="font-bold text-xl text-gray-400">OPP</span>
                        </div>
                        <span className="font-bold text-white uppercase block text-sm">{match.opponent}</span>
                    </div>
                </div>

                <div className="w-full">
                    <Button variant={featured ? 'primary' : 'outline'} className="w-full">
                        {t('tickets')}
                    </Button>
                </div>
            </div>
        </div>
    );
}
