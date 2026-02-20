import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg' | 'full';
}

export const Button = ({
    className,
    variant = 'primary',
    size = 'md',
    ...props
}: ButtonProps) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-primary hover:bg-primary-hover text-white shadow-[0_0_20px_rgba(143,90,168,0.3)] hover:shadow-[0_0_25px_rgba(165,107,191,0.5)]",
        outline: "border-2 border-primary text-primary hover:bg-primary/10",
        ghost: "text-primary hover:bg-primary/5",
    };

    const sizes = {
        sm: "px-4 py-2 text-xs",
        md: "px-8 py-4 text-sm",
        lg: "px-10 py-5 text-base",
        full: "w-full py-4 text-sm",
    };

    return (
        <button
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        />
    );
};
