import { players } from '@/data/players';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

// Generate static params for all known players
export function generateStaticParams() {
    return players.map((player) => ({
        id: player.id,
    }));
}

export default async function PlayerPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const player = players.find((p) => p.id === id);
    const commonT = useTranslations('Common');

    if (!player) {
        notFound();
    }

    return (
        <div className="pt-24 pb-16 min-h-screen bg-phoenix-black">
            <div className="container mx-auto px-4">
                <Link href="/team" className="text-gray-400 hover:text-white uppercase text-sm font-bold mb-8 inline-block">
                    &larr; Back to Team
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image Side */}
                    <div className="bg-gradient-to-b from-gray-800 to-phoenix-black p-8 rounded-lg border border-white/10 relative overflow-hidden h-[600px] flex items-end justify-center">
                        <span className="absolute top-4 right-4 text-9xl font-bold text-white/5 select-none">{player.number}</span>
                        <span className="text-gray-500 font-bold uppercase text-xl">Player Image Placeholder</span>
                    </div>

                    {/* Info Side */}
                    <div>
                        <span className="text-phoenix-gold font-bold text-xl uppercase tracking-widest mb-2 block">{player.position}</span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter mb-4">{player.name}</h1>
                        <div className="text-xl text-gray-400 mb-8 border-l-4 border-phoenix-green pl-4">
                            #{player.number} • {player.nationality}
                        </div>

                        <div className="prose prose-invert max-w-none text-gray-300 mb-8">
                            <p>
                                {player.name} is a key member of the Phoenix FC squad.
                                Known for their tactical awareness and physical presence,
                                they have become a fan favorite at The Fire Pit.
                            </p>
                            {player.bio && <p>{player.bio}</p>}
                        </div>

                        <div className="grid grid-cols-3 gap-6 mb-8 border-t border-b border-white/10 py-6">
                            <div className="text-center">
                                <span className="block text-3xl font-bold text-white">24</span>
                                <span className="text-xs text-gray-500 uppercase">Appearances</span>
                            </div>
                            <div className="text-center">
                                <span className="block text-3xl font-bold text-white">{player.position === 'GK' ? '12' : '8'}</span>
                                <span className="text-xs text-gray-500 uppercase">{player.position === 'GK' ? 'Clean Sheets' : 'Goals'}</span>
                            </div>
                            <div className="text-center">
                                <span className="block text-3xl font-bold text-white">1,840</span>
                                <span className="text-xs text-gray-500 uppercase">Minutes</span>
                            </div>
                        </div>

                        <Button size="lg">{commonT('followUs')}</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
