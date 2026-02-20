import React from 'react';
import { Button } from '@/components/ui/Button';
import { MailCheck, MessageCircle, CreditCard } from 'lucide-react';

export default function ThankYouPage() {
    const whatsappLink = process.env.WHATSAPP_LINK || 'https://wa.me/5541998402800?text=Olá,%20tenho%20uma%20dúvida%20sobre%20o%20Hair%20Fusion%20Tour';
    const pagamentoLink = process.env.PAGAMENTO_LINK || 'https://www.asaas.com/c/r2lhwrir3q6ywokj';

    return (
        <main className="min-h-screen flex items-center justify-center p-6 bg-background">
            <div className="max-w-xl w-full text-center space-y-8 animate-in fade-in zoom-in duration-700">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/20">
                    <MailCheck className="w-12 h-12 text-primary" />
                </div>

                <h1 className="text-4xl font-black uppercase tracking-tight">Inscrição <span className="text-gradient">Confirmada!</span></h1>

                <p className="text-lg text-text-secondary leading-relaxed">
                    Sua vaga no Hair Fusion Tour com Simony Santana foi reservada com sucesso. Siga as instruções abaixo para finalizar o processo.
                </p>

                <div className="grid gap-4 mt-8">
                    <a href={pagamentoLink} target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="w-full flex gap-3">
                            <CreditCard className="w-5 h-5" />
                            Finalizar inscrição e pagamento
                        </Button>
                    </a>

                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="lg" className="w-full flex gap-3">
                            <MessageCircle className="w-5 h-5 text-primary" />
                            Falar no WhatsApp
                        </Button>
                    </a>
                </div>

                <p className="text-sm text-text-secondary opacity-50 py-8">
                    Em caso de dúvidas, entre em contato com nosso suporte técnico.
                </p>
            </div>
        </main>
    );
}
