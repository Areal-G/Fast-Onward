import { HeroBannerSection } from "@/components/pages/home/HeroBannerSection";
import { AboutSection } from "@/components/pages/home/AboutSection";
import { WhyChooseUsSection } from "@/components/pages/home/WhyChooseUsSection";
import { PerfectForSection } from "@/components/pages/home/PerfectForSection";
import { HowItWorksSection } from "@/components/pages/home/HowItWorksSection";
import { Spacer } from "@/components/ui/spacer";
import { WhyWereDifferentSection } from "@/components/pages/home/WhyWereDifferentSection";
import { GetStartedSection } from "@/components/pages/home/GetStartedSection";

import { LandingPageLayout } from "@/components/layout/LandingPageLayout";
export default function Home() {
  return (
    <LandingPageLayout>
      <HeroBannerSection />
      <Spacer>
        <AboutSection />
      </Spacer>
      <Spacer size="medium">
        <WhyChooseUsSection />
      </Spacer>
      <PerfectForSection />
      <Spacer className="lg:pt-[140px]">
        <HowItWorksSection />
      </Spacer>
      <WhyWereDifferentSection />
      <Spacer space="top" className="lg:pt-[147px]">
        <GetStartedSection />
      </Spacer>
    </LandingPageLayout>
  );
}
