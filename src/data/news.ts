import { NewsPost } from '@/types';

export const news: NewsPost[] = [
    {
        id: 'n1',
        title: 'Match Preview: Ironclad United',
        summary: 'Everything you need to know before our clash with Ironclad United at home.',
        date: '2026-02-13',
        category: 'Match Preview',
        image: '/images/news/training.jpg',
        slug: 'match-preview-ironclad'
    },
    {
        id: 'n2',
        title: 'Youth Academy Trials Announced',
        summary: 'Phoenix FC is looking for the next generation of talent. Trials begin next month.',
        date: '2026-02-10',
        category: 'Academy',
        image: '/images/news/academy.jpg',
        slug: 'youth-academy-trials-2026'
    },
    {
        id: 'n3',
        title: 'Silva Extends Contract',
        summary: 'Midfield maestro Lucas Silva has signed a new 3-year deal with the club.',
        date: '2026-02-05',
        category: 'Transfer News',
        image: '/images/news/contract.jpg',
        slug: 'silva-extends-contract'
    }
];
