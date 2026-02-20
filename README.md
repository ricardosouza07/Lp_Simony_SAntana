# Hair Fusion Tour - Guia de Configuração

Este projeto foi construído com Next.js 14 (App Router), Tailwind CSS e integração com Google Sheets.

## Pré-requisitos
- Node.js 18+ instalado.
- Uma conta no Google Cloud para o Google Sheets.

## Instalação Local
1. Extraia o código no diretório desejado.
2. No terminal, execute:
   ```bash
   npm install
   ```
3. Crie um arquivo `.env.local` baseado no `.env.example` e preencha as variáveis.
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## Configuração do Google Sheets
1. Vá ao [Google Cloud Console](https://console.cloud.google.com/).
2. Crie um novo projeto.
3. Ative a **Google Sheets API**.
4. Vá em **Credentials** > **Create Credentials** > **Service Account**.
5. Crie a conta, gere uma chave JSON e salve.
6. Abra o arquivo JSON e use os valores `client_email` e `private_key` no seu `.env.local`.
7. Crie uma nova planilha no Google Sheets e copie o ID da URL (parte entre `/d/` e `/edit`).
8. **IMPORTANTE**: Compartilhe a planilha com o e-mail da Service Account criada (permissão de Editor).

## Deploy na Vercel
1. Suba o código para um repositório Git.
2. Importe o projeto na Vercel.
3. Adicione todas as variáveis de ambiente do `.env.local` nas configurações do projeto na Vercel.
4. O build será automático.

## Estrutura do Projeto
- `src/app`: Rotas e páginas (Landing Page e Sucesso).
- `src/components`: Seções modulares da landing page.
- `src/lib/sheets.ts`: Lógica de integração com a API do Google.
- `src/app/api/lead`: Endpoint para processar inscrições.
