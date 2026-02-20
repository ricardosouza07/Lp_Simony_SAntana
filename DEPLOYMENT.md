# Guia de Hospedagem - Hair Fusion Tour

Hospedar um site em **Next.js** (especialmente com rotas de API como a nossa de leads) é um pouco diferente de sites tradicionais em HTML/PHP.

## Opção 1: Vercel (Recomendada)
A Vercel é a criadora do Next.js e oferece uma hospedagem gratuita e extremamente rápida para este tipo de projeto.

1. Crie uma conta em [vercel.com](https://vercel.com).
2. Conecte seu repositório do GitHub ou use a [Vercel CLI](https://vercel.com/docs/cli) para subir a pasta do projeto.
3. Nas configurações da Vercel, adicione as **Environment Variables** que estão no seu `.env.local` (SHEETS_ID, WHATSAPP_LINK, etc).
4. O deploy é automático e você ganha um certificado SSL gratuito.

---

## Opção 2: HostGator
Para rodar este site na HostGator, o procedimento depende do seu plano:

### Se você tem um Plano VPS ou Dedicado:
1. **Instale o Node.js** no servidor via terminal (SSH).
2. **Suba os arquivos** via FTP ou Git.
3. No terminal do servidor, rode:
   ```bash
   npm install
   npm run build
   ```
4. Use um gerenciador de processos como o **PM2** para manter o site rodando:
   ```bash
   pm2 start npm --name "hair-fusion" -- start
   ```

### Se você tem um Plano compartilhado (P, M, Turbo):
> [!WARNING]
> Planos compartilhados da HostGator **não suportam nativamente o Node.js** via cPanel de forma simples para o Next.js App Router.

Se você estiver em um plano compartilhado, você tem duas alternativas:

#### A. Static Export (O site vira HTML estático)
1. No arquivo `next.config.mjs`, adicione `output: 'export'`.
2. Rode `npm run build`. Isso criará uma pasta `out`.
3. Suba o conteúdo da pasta `out` para o Gerenciador de Arquivos da HostGator.
4. **IMPORTANTE**: As rotas de API (Envio de Leads para Google Sheets) **deixarão de funcionar**, pois exigem um servidor Node.js rodando.

#### B. Redirecionar o Domínio
A melhor estratégia se você já pagou a HostGator:
1. Hospede o site na **Vercel** (grátis).
2. Na HostGator, altere os **DNS** ou aponte um **Registro A/CNAME** para o servidor da Vercel. 
3. Assim, você usa o domínio que comprou na HostGator com a tecnologia moderna da Vercel.

## Recomendação Final
Para manter a integração com o **Google Sheets** funcionando perfeitamente sem custos adicionais de servidor, a **Vercel** é a melhor escolha.
