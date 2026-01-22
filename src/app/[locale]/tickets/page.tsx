import { useTranslations } from 'next-intl';
import SectionHeader from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';

export default function TicketsPage() {
    const t = useTranslations('Navigation');
    const commonT = useTranslations('Common');

    const plans = [
        { name: 'Season Ticket', price: '$499', features: ['All Home Matches', 'Priority Cup Access', '10% Shop Discount'] },
        { name: 'Matchday', price: '$35', features: ['Single Match Entry', 'Standard Seating', 'Digital Programme'] },
        { name: 'VIP Experience', price: '$150', features: ['Lounge Access', 'Buffet & Drinks', 'Padded Seats', 'Meet the Players'] },
    ];

    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="container mx-auto px-4">
                <SectionHeader title={commonT('tickets')} subtitle="Secure your place in The Fire Pit." />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, i) => (
                        <div key={i} className={`p-8 border ${i === 1 ? 'border-phoenix-gold bg-phoenix-green/20' : 'border-white/10 bg-phoenix-black'} rounded-sm flex flex-col`}>
                            <h3 className="text-xl font-bold uppercase text-white mb-2">{plan.name}</h3>
                            <div className="text-4xl font-bold text-phoenix-gold mb-6">{plan.price}</div>
                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="text-gray-400 flex items-center">
                                        <span className="w-1.5 h-1.5 bg-phoenix-gold rounded-full mr-2"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Button variant={i === 1 ? 'primary' : 'outline'} className="w-full">Select Plan</Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
