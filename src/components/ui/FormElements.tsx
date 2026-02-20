import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Input = ({ label, error, className, ...props }: InputProps) => {
    return (
        <div className="w-full space-y-2">
            {label && <label className="text-sm font-medium text-text-secondary">{label}</label>}
            <input
                className={cn(
                    "w-full bg-background-section border border-accent-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-600",
                    error && "border-red-500",
                    className
                )}
                {...props}
            />
            {error && <span className="text-xs text-red-500">{error}</span>}
        </div>
    );
};

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    options: { value: string; label: string }[];
    error?: string;
    placeholder?: string;
}

export const Select = ({ label, options, error, className, placeholder, ...props }: SelectProps) => {
    return (
        <div className="w-full space-y-2">
            {label && <label className="text-sm font-medium text-text-secondary">{label}</label>}
            <select
                className={cn(
                    "w-full bg-background-section border border-accent-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none",
                    error && "border-red-500",
                    className
                )}
                {...props}
            >
                <option value="" disabled>{placeholder || 'Selecione uma opção'}</option>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-background-section">
                        {opt.label}
                    </option>
                ))}
            </select>
            {error && <span className="text-xs text-red-500">{error}</span>}
        </div>
    );
};
