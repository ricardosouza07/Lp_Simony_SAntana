'use client';

import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Input, Select } from './ui/FormElements';
import { useRouter } from 'next/navigation';
import { ScrollReveal } from './ui/ScrollReveal';

export const RegistrationForm = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const [formData, setFormData] = useState({
        nome: '',
        whatsapp: '',
        instagram: '',
        cidade: '',
        profissao: '',
        nivel: '',
        comoConheceu: '',
        aceiteLGPD: false,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('/api/lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                router.push('/obrigado');
            } else {
                const data = await res.json();
                setError(data.message || 'Ocorreu um erro ao enviar sua inscrição.');
            }
        } catch (err) {
            setError('Erro de conexão. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="section-padding" id="inscricao">
            <div className="container-custom max-w-3xl">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-black uppercase mb-4">Garanta sua <span className="text-gradient">vaga agora</span></h2>
                        <p className="text-text-secondary uppercase tracking-[0.2em] text-sm">Vagas limitadas • Evento presencial</p>
                    </div>
                </ScrollReveal>

                <ScrollReveal variant="up" delay={0.2}>
                    <form onSubmit={handleSubmit} className="card-gradient space-y-6">
                        <Input
                            label="Nome Completo"
                            required
                            placeholder="Seu nome"
                            value={formData.nome}
                            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        />

                        <div className="grid md:grid-cols-2 gap-6">
                            <Input
                                label="WhatsApp (com DDD)"
                                required
                                placeholder="(00) 00000-0000"
                                value={formData.whatsapp}
                                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                            />
                            <Input
                                label="Instagram"
                                placeholder="@seuusuario"
                                value={formData.instagram}
                                onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                            />
                        </div>

                        <Input
                            label="Cidade"
                            required
                            placeholder="Sua cidade - UF"
                            value={formData.cidade}
                            onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                        />

                        <div className="grid md:grid-cols-2 gap-6">
                            <Select
                                label="Profissão"
                                required
                                options={[
                                    { value: 'cabeleireiro', label: 'Cabeleireiro(a)' },
                                    { value: 'auxiliar', label: 'Auxiliar' },
                                    { value: 'proprietario', label: 'Proprietário de Salão' },
                                    { value: 'outro', label: 'Outro' },
                                ]}
                                value={formData.profissao}
                                onChange={(e) => setFormData({ ...formData, profissao: e.target.value })}
                            />
                            <Select
                                label="Nível Técnico"
                                required
                                options={[
                                    { value: 'iniciante', label: 'Iniciante' },
                                    { value: 'intermediario', label: 'Intermediário' },
                                    { value: 'avancado', label: 'Avançado' },
                                ]}
                                value={formData.nivel}
                                onChange={(e) => setFormData({ ...formData, nivel: e.target.value })}
                            />
                        </div>

                        <Select
                            label="Como conheceu?"
                            required
                            options={[
                                { value: 'instagram', label: 'Instagram' },
                                { value: 'facebook', label: 'Facebook' },
                                { value: 'indicacao', label: 'Indicação' },
                                { value: 'anuncio', label: 'Anúncio Google/Outros' },
                            ]}
                            value={formData.comoConheceu}
                            onChange={(e) => setFormData({ ...formData, comoConheceu: e.target.value })}
                        />

                        <div className="flex items-start gap-3 mt-4">
                            <input
                                type="checkbox"
                                id="lgpd"
                                className="mt-1 w-4 h-4 rounded border-accent-border bg-background transition-all accent-primary"
                                required
                                checked={formData.aceiteLGPD}
                                onChange={(e) => setFormData({ ...formData, aceiteLGPD: e.target.checked })}
                            />
                            <label htmlFor="lgpd" className="text-sm text-text-secondary leading-tight">
                                Aceito receber comunicações sobre o evento e concordo com o tratamento dos meus dados.
                            </label>
                        </div>

                        {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

                        <Button type="submit" size="full" disabled={loading}>
                            {loading ? 'Enviando...' : 'Quero participar do Hair Fusion Tour'}
                        </Button>
                    </form>
                </ScrollReveal>
            </div>
        </section>
    );
};
