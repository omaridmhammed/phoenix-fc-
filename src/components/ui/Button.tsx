import { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center rounded-sm font-bold uppercase tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-phoenix-gold focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
                    {
                        'bg-phoenix-gold text-phoenix-black hover:bg-white': variant === 'primary',
                        'bg-phoenix-green text-white hover:bg-phoenix-black': variant === 'secondary',
                        'border-2 border-phoenix-gold text-phoenix-gold hover:bg-phoenix-gold hover:text-phoenix-black': variant === 'outline',
                        'text-white hover:text-phoenix-gold': variant === 'ghost',
                        'h-9 px-4 text-sm': size === 'sm',
                        'h-11 px-8 text-base': size === 'md',
                        'h-14 px-10 text-lg': size === 'lg',
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';
