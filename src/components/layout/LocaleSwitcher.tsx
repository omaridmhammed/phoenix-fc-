'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/navigation';
import { ChangeEvent, useTransition } from 'react';
import { Globe } from 'lucide-react';

export default function LocaleSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    };

    return (
        <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-phoenix-gold" />
            <select
                defaultValue={locale}
                onChange={onSelectChange}
                disabled={isPending}
                className="bg-transparent text-white text-sm font-bold uppercase focus:outline-none cursor-pointer"
                aria-label="Select language"
            >
                <option value="en" className="text-black">EN</option>
                <option value="fr" className="text-black">FR</option>
            </select>
        </div>
    );
}
