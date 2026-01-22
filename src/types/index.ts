export type PlayerPosition = 'GK' | 'DEF' | 'MID' | 'FWD';

export interface Player {
    id: string;
    name: string;
    number: number;
    position: PlayerPosition;
    image: string;
    bio?: string;
    nationality?: string;
}

export interface Match {
    id: string;
    opponent: string;
    opponentCrest?: string;
    date: string; // ISO string
    time: string;
    venue: string;
    competition: string;
    isHome: boolean;
    score?: {
        home: number;
        away: number;
    };
}

export interface NewsPost {
    id: string;
    title: string;
    summary: string;
    date: string;
    image: string;
    category: string;
    slug: string;
}

export interface Sponsor {
    id: string;
    name: string;
    logo: string;
}
