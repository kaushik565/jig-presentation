import { HeaderSection } from '@/src/components/HeaderSection';
import { ProblemsSection } from '@/src/components/ProblemsSection';
import { SolutionSection } from '@/src/components/SolutionSection';
import { BenefitsSection } from '@/src/components/BenefitsSection';
import { ResultsSection } from '@/src/components/ResultsSection';
import { FooterSection } from '@/src/components/FooterSection';
import { TimelineSection } from '@/src/components/TimelineSection';
import { ClosingSection } from '@/src/components/ClosingSection';
import { Navigation } from '@/src/components/Navigation';

export default function Home() {
  return (
    <main className="bg-white">
      <Navigation />
      
      <div data-section="0">
        <HeaderSection />
      </div>
      
      <div data-section="1">
        <ProblemsSection />
      </div>
      
      <div data-section="2">
        <SolutionSection />
      </div>
      
      <div data-section="3">
        <BenefitsSection />
      </div>
      
      <div data-section="4">
        <ResultsSection />
      </div>
      
      <div data-section="5">
        <FooterSection />
      </div>
      
      <div data-section="6">
        <TimelineSection />
      </div>
      
      <div data-section="7">
        <ClosingSection />
      </div>
    </main>
  );
}
