import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Hair Fusion Tour com Simony Santana | Curitiba | 16/03/2026",
    description: "Workshop técnico em mechas e colorimetria para profissionais que buscam previsibilidade, segurança e autoridade no salão.",
    openGraph: {
        title: "Hair Fusion Tour com Simony Santana",
        description: "Workshop técnico em mechas e colorimetria",
        type: "website",
        locale: "pt_BR",
        url: "https://hairfusiontour.com.br",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" className="scroll-smooth">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
