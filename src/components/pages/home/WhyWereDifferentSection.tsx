import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { H2, LargeText } from "@/components/ui/typography";
import { Stack, StackDirection } from "@/components/ui/stack";
import { Spacing } from "@/components/ui/spacing";
import { TicketButton } from "@/components/ui/TicketButton";
import Image from "next/image";

export function WhyWereDifferentSection() {
  return (
    <section>
      <Container>
        <Stack
          direction={StackDirection.ROW}
          justification="between"
          className=" px-[70px]"
        >
          {/* Left content */}
          <Stack
            direction={StackDirection.COLUMN}
            gap={Spacing.LG}
            className="w-[539px] pt-[58px]"
          >
            <SectionLabel>WHY WE&apos;RE DIFFERENT</SectionLabel>

            <H2>What Makes Fast Onward Better?</H2>

            <LargeText className="pb-[30px]">
              Unlike other services that provide vague or recycled tickets, Fast
              Onward uses real, current flight information to create customized,
              one-time-use documents. That&apos;s why our tickets look and feel
              authentic — because it&apos;s based on actual flights from real
              airlines. No tricks, no templates, just fast and reliable service.
            </LargeText>

            <TicketButton href="/get-ticket" />
          </Stack>

          {/* Right image */}

          <Stack className="relative">
            <Image
              src="/images/pages/home/why-were-different-banner-image.webp"
              alt="Why were different"
              width={597}
              height={494}
            />
            <Image
              src="/images/pages/home/why-were-different-cloud-image.svg"
              alt="cloud"
              width={336}
              height={116}
              className="absolute -bottom-[67px] -left-[144px]"
            />
          </Stack>
        </Stack>
      </Container>
    </section>
  );
}
