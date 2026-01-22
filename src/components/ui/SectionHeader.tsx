import { cn } from '@/lib/utils';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    align?: 'left' | 'center' | 'right';
    className?: string;
}

export default function SectionHeader({ title, subtitle, align = 'center', className }: SectionHeaderProps) {
    return (
        <div className={cn('mb-12', {
            'text-center': align === 'center',
            'text-left': align === 'left',
            'text-right': align === 'right',
        }, className)}>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter text-phoenix-gold mb-4 relative inline-block">
                {title}
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-phoenix-green/20"></span>
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-phoenix-gold"></span>
            </h2>
            {subtitle && (
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mt-4">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
