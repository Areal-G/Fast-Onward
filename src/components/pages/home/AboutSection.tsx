import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Stack, StackDirection } from "@/components/ui/stack";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { H2, LargeText } from "@/components/ui/typography";
import { TicketButton } from "@/components/ui/TicketButton";

export function AboutSection() {
  return (
    <section>
      <Container className="relative z-10">
        <Stack
          direction={StackDirection.ROW}
          justification="between"
          className=""
        >
          {/* Left section - Image */}
          <div className="w-[701px] mt-[23px] h-[541px] relative">
            <Image
              src="/images/pages/home/about-banner-image.webp"
              alt="Person with passport and ticket"
              fill
              className="object-cover"
            />
          </div>

          {/* Right section - Content */}
          <div className="w-[539px] mr-[53px] space-y-5">
            <Stack
              direction={StackDirection.ROW}
              justification="between"
              className=""
            >
              <SectionLabel className="mt-auto">
                ABOUT ONWARD TICKET
              </SectionLabel>
              <div className="w-[201px] h-[155px] relative">
                <Image
                  src="/images/pages/home/plane-blue-trail-image.webp"
                  alt="Plane"
                  fill
                  className="object-cover"
                />
              </div>
            </Stack>

            <H2>What is an Onward Ticket?</H2>

            <LargeText>
              An onward ticket is a temporary flight reservation showing that
              you plan to leave your destination country. Airlines, border
              control, and embassies often require this proof to ensure
              travelers won&apos;t overstay their visa. Instead of booking a
              flight you might never use, use Fast Onward to get a
              genuine-looking flight itinerary that meets all travel document
              requirements — without the cost of a real ticket.
            </LargeText>
            <div className="pt-[30px]">
              <TicketButton href="/tickets" />
            </div>
          </div>
        </Stack>
      </Container>
    </section>
  );
}
