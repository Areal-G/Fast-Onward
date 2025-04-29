import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { Container } from "@/components/ui/container";
import { Spacer } from "@/components/ui/spacer";

interface LandingPageLayoutProps {
  children: React.ReactNode;
}

export function LandingPageLayout({ children }: LandingPageLayoutProps) {
  return (
    <Container className="my-4 mx-auto">
      <Navbar />

      <main className="flex-grow">{children}</main>

      <Spacer space="top" className="lg:pt-[16px]">
        <Footer />
      </Spacer>
    </Container>
  );
}
