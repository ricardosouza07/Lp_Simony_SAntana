import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

export const ForWho = () => {
    const items = [
        "Cabeleireiros que já trabalham com mechas e querem mais segurança técnica",
        "Profissionais que desejam reduzir erros e retrabalho",
        "Quem busca resultados mais naturais e sofisticados",
        "Quem quer atualizar técnicas e entender tendências atuais"
    ];

    return (
        <section className="bg-background-section section-padding border-b border-accent-border">
            <div className="container-custom">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <ScrollReveal variant="left">
                            <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase tracking-tight">
                                Para quem é <span className="text-primary">este evento?</span>
                            </h2>
                        </ScrollReveal>
                        <div className="space-y-4">
                            {items.map((item, i) => (
                                <ScrollReveal key={i} variant="left" delay={i * 0.1}>
                                    <div className="flex gap-4 p-4 rounded-xl border border-accent-border bg-background/40 hover:border-primary/40 transition-colors">
                                        <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                                        <p className="text-text-secondary leading-snug">{item}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                    <ScrollReveal variant="right">
                        <div className="p-8 md:p-12 border-2 border-dashed border-accent-border rounded-2xl flex flex-col justify-center text-center">
                            <p className="text-2xl md:text-3xl font-light italic text-text-secondary leading-relaxed mb-6">
                                "Se você quer <span className="text-white font-bold">previsibilidade, segurança e mais autoridade</span> no salão, esse workshop foi feito para você."
                            </p>
                            <div className="w-20 h-1 bg-primary mx-auto"></div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export const WhatYouWillLearn = () => {
    const learningItems = [
        "Leitura correta de fundo de clareamento",
        "Estratégias modernas de aplicação de mechas",
        "Neutralizações e correções",
        "Organização do raciocínio técnico",
        "Tendências atuais com foco comercial",
        "Como entregar resultados mais previsíveis"
    ];

    return (
        <section className="section-padding">
            <div className="container-custom">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase">O que você vai <span className="text-gradient">aprender</span></h2>
                        <div className="w-24 h-1 bg-primary mx-auto"></div>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {learningItems.map((item, i) => (
                        <ScrollReveal key={i} variant="up" delay={i * 0.1}>
                            <div className="card-gradient group hover:border-primary transition-all duration-500 h-full">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <ArrowRight className="w-6 h-6" />
                                </div>
                                <p className="text-lg font-medium leading-tight">{item}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal delay={0.5}>
                    <div className="mt-16 p-8 border border-primary/20 bg-primary/5 rounded-2xl text-center">
                        <p className="text-xl md:text-2xl font-light text-text-secondary">
                            Mais do que técnica, Simony ensina <span className="text-white font-bold uppercase tracking-widest">raciocínio profissional</span>.
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};
