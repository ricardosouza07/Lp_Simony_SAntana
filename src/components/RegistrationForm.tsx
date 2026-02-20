'use client';

import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Input, Select } from './ui/FormElements';
import { useRouter } from 'next/navigation';
import { ScrollReveal } from './ui/ScrollReveal';

export const RegistrationForm = () => {
    const whatsappLink = process.env.NEXT_PUBLIC_WHATSAPP_LINK || "https://wa.me/5541998402800?text=Olá,%20quero%20me%20inscrever%20no%20Hair%20Fusion%20Tour";

    return (
        <section className="section-padding" id="inscricao">
            <div className="container-custom max-w-3xl text-center">
                <ScrollReveal>
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-5xl font-black uppercase mb-4">Garanta sua <span className="text-gradient">vaga agora</span></h2>
                        <p className="text-text-secondary uppercase tracking-[0.2em] text-sm mb-8">Vagas limitadas • Evento presencial</p>

                        <div className="card-gradient p-8 md:p-12 border-2 border-primary/20">
                            <h3 className="text-xl md:text-2xl font-bold mb-6">Fale diretamente comigo para garantir sua inscrição com desconto especial!</h3>
                            <p className="text-text-secondary mb-10 text-lg">
                                Devido à alta procura, as inscrições estão sendo processadas via WhatsApp para garantir o melhor atendimento a cada profissional.
                            </p>

                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-full"
                            >
                                <Button size="lg" className="w-full py-6 text-xl animate-pulse shadow-2xl shadow-primary/40">
                                    CHAMAR NO WHATSAPP AGORA
                                </Button>
                            </a>

                            <p className="mt-6 text-xs text-text-secondary opacity-60">
                                Ao clicar, você será redirecionado para o WhatsApp oficial da SIMONY SANTANA.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};
