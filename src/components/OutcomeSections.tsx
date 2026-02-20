import React from 'react';
import { AlertCircle, Package, Trophy } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

export const Scarcity = () => {
    return (
        <section className="section-padding pt-0">
            <div className="container-custom">
                <ScrollReveal variant="fade">
                    <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                        <AlertCircle className="w-12 h-12 text-red-500 shrink-0" />
                        <p className="text-lg md:text-xl font-medium text-text-secondary">
                            A procura foi intensa e as vagas do formato completo foram encerradas. <span className="text-white font-bold">O Workshop Técnico (Dia 1) continua com vagas abertas</span>, mas por tempo limitado.
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export const WhatIsIncluded = () => {
    const inclusions = [
        "Acesso ao Workshop Técnico",
        "Material de apoio",
        "Certificado",
        "Networking com profissionais da região",
        "Estrutura profissional do evento"
    ];

    const outcomes = [
        "Mais segurança nas mechas",
        "Melhor leitura de cabelo",
        "Estratégias aplicáveis imediatamente no salão",
        "Mais confiança na entrega do resultado"
    ];

    return (
        <section className="bg-background-section section-padding">
            <div className="container-custom">
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <ScrollReveal variant="left">
                            <h2 className="text-3xl font-bold uppercase flex items-center gap-3">
                                <Package className="text-primary" /> O que está <span className="text-primary">incluso</span>
                            </h2>
                        </ScrollReveal>
                        <ul className="space-y-4">
                            {inclusions.map((item, i) => (
                                <ScrollReveal key={i} variant="left" delay={i * 0.1}>
                                    <li className="flex items-center gap-3 text-text-secondary">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                        {item}
                                    </li>
                                </ScrollReveal>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-8">
                        <ScrollReveal variant="right">
                            <h2 className="text-3xl font-bold uppercase flex items-center gap-3">
                                <Trophy className="text-primary" /> Resultado <span className="text-primary">final</span>
                            </h2>
                        </ScrollReveal>
                        <div className="space-y-4">
                            {outcomes.map((item, i) => (
                                <ScrollReveal key={i} variant="right" delay={i * 0.1}>
                                    <div className="p-4 bg-background border border-accent-border rounded-xl">
                                        <p className="text-white font-medium">{item}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
