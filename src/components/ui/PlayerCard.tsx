import { Player } from '@/types';
import { Link } from '@/navigation';

interface PlayerCardProps {
    player: Player;
}

export default function PlayerCard({ player }: PlayerCardProps) {
    return (
        <div className="group relative overflow-hidden bg-phoenix-black border border-white/10 rounded-sm">
            {/* Background Number */}
            <span className="absolute top-0 right-0 text-9xl font-bold text-white/5 opacity-0 group-hover:opacity-10 transition-opacity select-none -translate-y-4 translate-x-4">
                {player.number}
            </span>

            <div className="aspect-[3/4] bg-gradient-to-b from-gray-800 to-phoenix-black relative">
                {/* Image Placeholder */}
                <div className="absolute inset-x-0 bottom-0 h-full bg-gray-700 opacity-50 flex items-end justify-center">
                    <span className="text-gray-500 pb-10">Image Placeholder</span>
                </div>
                {/* Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-phoenix-black via-transparent to-transparent opacity-90" />
            </div>

            <div className="absolute bottom-0 left-0 w-full p-4">
                <span className="text-phoenix-gold text-xs font-bold uppercase tracking-wider block mb-1">
                    {player.position}
                </span>
                <h3 className="text-2xl font-bold text-white uppercase group-hover:text-phoenix-gold transition-colors">
                    <span className="text-gray-500 mr-2 opacity-50 group-hover:opacity-100 transition-opacity">{player.number}</span>
                    {player.name}
                </h3>
            </div>

            <Link href={`/team/${player.id}`} className="absolute inset-0 z-10">
                <span className="sr-only">View {player.name}</span>
            </Link>
        </div>
    );
}
