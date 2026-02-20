import { Hero } from "@/components/Hero";
import { ForWho, WhatYouWillLearn } from "@/components/LearningSections";
import { AboutSimony, EventInfo } from "@/components/DetailsSections";
import { Scarcity, WhatIsIncluded } from "@/components/OutcomeSections";
import { RegistrationForm } from "@/components/RegistrationForm";
import { FooterCTA } from "@/components/FooterCTA";
import { VideoBubble } from "@/components/VideoBubble";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <ForWho />
            <WhatYouWillLearn />
            <AboutSimony />
            <EventInfo />
            <Scarcity />
            <WhatIsIncluded />
            <RegistrationForm />

            <VideoBubble />

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-accent-border text-center text-text-secondary text-sm">
                <p>&copy; 2026 Hair Fusion Tour com Simony Santana. Todos os direitos reservados.</p>
                <p className="mt-2 text-xs opacity-50">Desenvolvido para profissionais da beleza.</p>
            </footer>

            <FooterCTA />
        </main>
    );
}
