import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Stack, StackDirection } from "@/components/ui/stack";
import { TicketButton } from "@/components/ui/TicketButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { H1, LargeText } from "@/components/ui/typography";
import { Spacing } from "@/components/ui/spacing";

export function HeroBannerSection() {
  return (
    <section className="relative h-[828px] -mt-[108px] ">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/pages/home/hero-banner-background.webp"
          alt="World Map"
          fill
          className="object-cover block"
          priority
          quality={100}
        />
      </div>

      <Container className="relative pt-[108px] z-10">
        <Stack direction={StackDirection.ROW} justification="between">
          {/* Left section */}
          <Stack
            direction={StackDirection.COLUMN}
            gap={Spacing.LG}
            className="w-[590px] ml-[68px] mt-[135px]"
          >
            <SectionLabel>ONWARD TICKET</SectionLabel>

            <H1>Instant Onward Ticket for Visa & Travel Proof</H1>

            <LargeText className="pb-[30px]">
              Need proof of onward travel for visa or airport checks? Fast
              Onward lets you generate a real, verifiable flight reservation in
              under a minute — perfect for visas, immigration, or check-in
              requirements.
            </LargeText>

            <TicketButton href="/tickets" />
          </Stack>

          {/* Right section */}
          <div className=" w-[647px] mr-[39px] mt-[75px] h-[548px] relative">
            <Image
              src="/images/pages/home/hero-banner-image.webp"
              alt="Ticket"
              fill
              className="object-contain"
            />
          </div>
        </Stack>
      </Container>
    </section>
  );
}
