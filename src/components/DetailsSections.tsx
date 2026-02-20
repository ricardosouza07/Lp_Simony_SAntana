import React from 'react';
import { MapPin, Clock, CreditCard, Calendar } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

export const AboutSimony = () => {
    return (
        <section className="bg-[#EAE2D8] text-[#2D2D2D] section-padding border-y border-transparent">
            <div className="container-custom">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <ScrollReveal variant="left">
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/simony.jpg"
                                alt="Simony Santana"
                                className="w-full h-full object-cover"
                            />
                            {/* Decorative element from the image */}
                            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#B56D4E] opacity-20 rounded-full blur-3xl"></div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal variant="right" delay={0.2}>
                        <div className="flex flex-col">
                            <span className="text-[#B56D4E] font-bold uppercase tracking-widest text-sm mb-2 block">Quem é</span>
                            <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase leading-tight text-[#B56D4E]">
                                Simony <span className="text-[#2D2D2D]">Santana</span>
                            </h2>

                            <div className="space-y-4 text-lg leading-relaxed text-[#4A4A4A] mb-10">
                                <p>Apaixonada pela profissão e vem a mais de 10 anos transformando vidas pelas mãos.</p>
                                <p>Especialista em colorimetria, mechas, corte e visagismo. Formada pelas maiores e melhores academias nacionais e internacionais.</p>
                                <p>Empresária no no ramo da beleza, trabalhou nos maiores e melhores salões de beleza de São Paulo. Além de ter seu próprio salão, se tornou uma das principais educadoras do Brasil no ramo da beleza.</p>
                                <p>Embaixadora da Olenka cosméticos e MUP color, capacitou mais de 28mil profissionais em todo o Brasil. Como palestrante, atua nos temas atendimento, experiência e sucesso do cliente.</p>
                                <p className="font-bold text-[#B56D4E]">Ela acredita que servir é um dom.</p>
                            </div>

                            <div className="grid grid-cols-2 gap-8 border-t border-[#B56D4E]/20 pt-10">
                                <div>
                                    <p className="text-3xl md:text-4xl font-black text-[#B56D4E]">+ 30 mil</p>
                                    <p className="text-sm font-bold uppercase tracking-tighter text-[#4A4A4A]">profissionais treinados</p>
                                </div>
                                <div>
                                    <p className="text-2xl md:text-3xl font-black text-[#B56D4E]">Embaixadora</p>
                                    <p className="text-sm font-bold uppercase tracking-tighter text-[#4A4A4A]">da Olenka</p>
                                </div>
                                <div>
                                    <p className="text-2xl md:text-3xl font-black text-[#B56D4E]">Palestrante</p>
                                    <p className="text-sm font-bold uppercase tracking-tighter text-[#4A4A4A]">na Fadel Palestrantes</p>
                                </div>
                                <div>
                                    <p className="text-2xl md:text-3xl font-black text-[#B56D4E]">Empresária</p>
                                    <p className="text-sm font-bold uppercase tracking-tighter text-[#4A4A4A]">na área da beleza</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export const EventInfo = () => {
    return (
        <section className="section-padding" id="info">
            <div className="container-custom">
                <ScrollReveal>
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 uppercase text-center">Informações <span className="text-primary">do Evento</span></h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ScrollReveal variant="up" delay={0.1}>
                        <div className="card-gradient flex flex-col items-center text-center h-full">
                            <Calendar className="w-10 h-10 text-primary mb-4" />
                            <h4 className="text-sm uppercase tracking-widest text-text-secondary mb-2">Data</h4>
                            <p className="text-xl font-bold">16/03/2026</p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal variant="up" delay={0.2}>
                        <div className="card-gradient flex flex-col items-center text-center h-full">
                            <Clock className="w-10 h-10 text-primary mb-4" />
                            <h4 className="text-sm uppercase tracking-widest text-text-secondary mb-2">Horário</h4>
                            <p className="text-xl font-bold">9h às 17h</p>
                        </div>
                    </ScrollReveal>

                    <div className="lg:col-span-2">
                        <ScrollReveal variant="up" delay={0.3}>
                            <div className="card-gradient flex flex-col items-center text-center h-full">
                                <MapPin className="w-10 h-10 text-primary mb-4" />
                                <h4 className="text-sm uppercase tracking-widest text-text-secondary mb-2">Local</h4>
                                <p className="text-lg font-bold leading-tight">Hotel Rockefeller by Slaviero Hotéis</p>
                                <p className="text-sm text-text-secondary">R. Rockefeller, 11 – Rebouças, Curitiba – PR</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                <ScrollReveal variant="up" delay={0.5}>
                    <div className="mt-12 card-gradient border-2 border-primary/30 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <CreditCard className="w-24 h-24" />
                        </div>
                        <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h4 className="text-2xl font-bold uppercase mb-2">Investimento</h4>
                                <p className="text-5xl font-black text-gradient">R$ 349</p>
                            </div>
                            <div className="space-y-3">
                                <p className="flex items-center gap-2 text-text-secondary">
                                    <CheckCircle className="w-5 h-5 text-primary" />
                                    Cartão em até 8x sem juros
                                </p>
                                <p className="flex items-center gap-2 text-text-secondary">
                                    <CheckCircle className="w-5 h-5 text-primary" />
                                    Entrada + restante até 10 dias antes do curso
                                </p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

const CheckCircle = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
);
