import { NextResponse } from 'next/server';
import { appendToSheet } from '@/lib/sheets';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { nome, whatsapp, instagram, cidade, profissao, nivel, comoConheceu, aceiteLGPD } = body;

        // Server-side validation
        if (!nome || !whatsapp || !cidade || !profissao || !nivel || !aceiteLGPD) {
            return NextResponse.json({ message: 'Campos obrigatórios ausentes.' }, { status: 400 });
        }

        const timestamp = new Date().toLocaleString('pt-BR');
        const row = [timestamp, nome, whatsapp, instagram, cidade, profissao, nivel, comoConheceu];

        // Optional: Only run if env vars are present
        if (process.env.SHEETS_ID && process.env.GOOGLE_CLIENT_EMAIL) {
            await appendToSheet(row);
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ message: 'Erro interno ao processar lead.' }, { status: 500 });
    }
}
