import { Match } from '@/types';

export const upcomingMatches: Match[] = [
    {
        id: 'm1',
        opponent: 'Ironclad United',
        date: '2026-02-14',
        time: '19:45',
        venue: 'Phoenix Stadium',
        competition: 'Premier League',
        isHome: true
    },
    {
        id: 'm2',
        opponent: 'Coastal City',
        date: '2026-02-21',
        time: '15:00',
        venue: 'Coastal Arena',
        competition: 'Premier League',
        isHome: false
    },
    {
        id: 'm3',
        opponent: 'Royal FC',
        date: '2026-02-28',
        time: '20:00',
        venue: 'Phoenix Stadium',
        competition: 'Cup Semi-Final',
        isHome: true
    }
];

export const pastMatches: Match[] = [
    {
        id: 'm-old-1',
        opponent: 'North Star',
        date: '2026-02-07',
        time: '15:00',
        venue: 'North Star Park',
        competition: 'Premier League',
        isHome: false,
        score: { home: 1, away: 2 }
    }
];
