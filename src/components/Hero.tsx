'use client';

import React from 'react';
import { Button } from './ui/Button';
import { Calendar, MapPin, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { ParticleBackground } from './ui/ParticleBackground';

export const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-accent-border">
            <ParticleBackground />
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 border border-primary rounded-full blur-3xl"
                ></motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-primary-light rounded-full blur-3xl"
                ></motion.div>
            </div>

            <div className="container-custom relative z-10 section-padding text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block px-4 py-1 mb-6 border border-primary/30 rounded-full bg-primary/5 text-primary-light text-xs font-bold tracking-[0.2em] uppercase"
                >
                    Workshop Técnico | Dia 1
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-7xl font-black mb-6 leading-tight uppercase tracking-tight"
                >
                    Hair Fusion Tour <br />
                    <span className="text-gradient">com Simony Santana</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed font-light"
                >
                    Imersão técnica em mechas e colorimetria para profissionais que querem elevar o padrão dos resultados no salão.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 text-sm text-text-secondary"
                >
                    <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span>16 de Março de 2026</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span>Hotel Rockefeller – Curitiba</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-primary" />
                        <span>Certificado incluso</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <a href="#inscricao">
                        <Button size="lg">Quero garantir minha vaga</Button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
