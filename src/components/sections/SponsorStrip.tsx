export default function SponsorStrip() {
    const sponsors = [
        'Aura Athletics', 'Nebula Tech', 'Orbit Bank', 'Vertex Energy', 'Quasar Motors'
    ];

    return (
        <div className="bg-phoenix-offwhite py-12 border-t border-white/10">
            <div className="container mx-auto px-4">
                <p className="text-center text-phoenix-black/50 text-sm font-bold uppercase tracking-widest mb-8">
                    Official Partners
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-75 grayscale hover:grayscale-0 transition-all duration-500">
                    {sponsors.map((sponsor, i) => (
                        <div key={i} className="text-2xl md:text-3xl font-bold text-phoenix-black/20 uppercase select-none">
                            {sponsor}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
