import { Container } from "@/components/ui/container";
import { H2, LargeText } from "@/components/ui/typography";
import { Stack, StackDirection } from "@/components/ui/stack";
// import { Spacing } from "@/components/ui/spacing";
import { TicketButton } from "@/components/ui/TicketButton";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Color } from "@/components/ui/color";
import { Spacing } from "@/components/ui/spacing";
export function GetStartedSection() {
  return (
    <section>
      <Container className="px-0">
        <Stack
          direction={StackDirection.ROW}
          justification="between"
          className="relative overflow-hidden bg-primary pr-[114px] pt-[54px] rounded-[30px]"
        >
          {/* left side */}

          <Image
            src="/images/pages/home/get-started-banner-image.webp"
            alt="Ticket examples"
            width={631}
            height={456}
            className="object-contain"
          />
          {/* cloud image */}

          {/* Right side with text content */}
          <Stack
            direction={StackDirection.COLUMN}
            gap={Spacing.LG}
            className="w-[489px] pt-[34px] text-white"
          >
            <SectionLabel className="bg-[#419FF6] text-white">
              GET STARTED
            </SectionLabel>

            <H2 color={Color.WHITE}>Ready to Travel Smart?</H2>

            <LargeText color={Color.WHITE}>
              Join thousands of travelers worldwide who rely on Fast Onward for
              fast, easy, and secure onward tickets.
            </LargeText>

            <LargeText className="pb-[30px]" color={Color.WHITE}>
              Get your genuine-looking flight reservation now — it only takes a
              minute.
            </LargeText>

            <TicketButton href="/get-ticket" variant="secondary" />
          </Stack>
          {/* bottom cloud */}
          <Image
            src="/images/pages/home/get-started-cloud-image.svg"
            alt="Decorative cloud"
            width={298}
            height={108}
            className="absolute top-0 right-0 "
          />

          {/* Plane path decoration */}

          <Image
            src="/images/pages/home/plane-light-blue-trail-image.webp"
            alt="Plane path"
            width={201}
            height={135}
            className="absolute bottom-0 right-[29px]"
          />
        </Stack>
      </Container>
    </section>
  );
}
