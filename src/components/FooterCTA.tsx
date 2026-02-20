'use client';

import React, { useEffect, useState } from 'react';
import { Button } from './ui/Button';

export const FooterCTA = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling 500px
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`fixed bottom-0 left-0 w-full p-4 bg-background/80 backdrop-blur-md border-t border-accent-border z-50 md:hidden transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
            <a href="#inscricao">
                <Button size="full">Quero garantir minha vaga</Button>
            </a>
        </div>
    );
};
