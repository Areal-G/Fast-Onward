import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { H2, LargeText } from "@/components/ui/typography";
import { TicketButton } from "@/components/ui/TicketButton";
import Image from "next/image";
import { Stack, StackDirection } from "@/components/ui/stack";

interface CheckItemProps {
  text: string;
}

function CheckItem({ text }: CheckItemProps) {
  return (
    <Stack
      direction={StackDirection.ROW}
      alignment="center"
      className="bg-white rounded-full w-[625px] py-[9px] px-4 gap-2.5 shadow-[0px_4px_14px_0px_rgba(1,11,20,0.08)]"
    >
      <Image
        src="/icons/pages/home/blue-check-icon.webp"
        alt="Check"
        width={30}
        height={30}
        quality={100}
      />
      <LargeText>{text}</LargeText>
    </Stack>
  );
}

export function PerfectForSection() {
  const checkItems = [
    "Tourists and backpackers traveling on a one-way ticket",
    "Digital nomads applying for long-term or flexible-stay visas",
    "Visa applicants needing proof of onward travel",
    "Travelers facing immigration or customs requirements",
    "Anyone who needs travel proof without committing to a full ticket",
  ];

  return (
    <section>
      <Container className="bg-primary-surface rounded-[30px]">
        <Stack direction={StackDirection.ROW} justification="between">
          <Stack
            direction={StackDirection.COLUMN}
            className="pt-[120px] pl-[68px] gap-5"
          >
            <SectionLabel className="bg-[#C1E0FC]">PERFECT FOR</SectionLabel>

            <H2>Who Is This For?</H2>

            <Stack
              direction={StackDirection.COLUMN}
              className="space-y-2.5 mb-[30px]"
            >
              {checkItems.map((item, index) => (
                <CheckItem key={index} text={item} />
              ))}
            </Stack>

            <TicketButton href="/tickets" />
            <div className="mt-auto ml-auto">
              <Image
                src="/images/pages/home/perfect-for-cloud-image.svg"
                alt="cloud image"
                width={333}
                height={80}
                className="object-cover"
              />
            </div>
          </Stack>

          <Image
            src="/images/pages/home/perfect-for-banner-image.webp"
            alt="map image"
            width={699}
            height={629}
            quality={100}
            className="my-[53px] hidden lg:block"
          />
        </Stack>
      </Container>
    </section>
  );
}
