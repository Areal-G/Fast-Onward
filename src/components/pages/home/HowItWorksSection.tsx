import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { H2, H3, LargeText } from "@/components/ui/typography";
import { Stack, StackDirection } from "@/components/ui/stack";

import Image from "next/image";
import { Spacing } from "@/components/ui/spacing";

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  bannerImage: string;
}

function StepCard({
  stepNumber,
  title,
  description,
  bannerImage,
}: StepCardProps) {
  const getPlanePosition = () => {
    switch (stepNumber) {
      case 1:
        return "top-5"; // Top position for step 1
      case 2:
        return "top-1/2 -translate-y-1/2"; // Middle position for step 2
      case 3:
        return "bottom-5"; // Bottom position for step 3
      default:
        return "top-5";
    }
  };

  return (
    <Stack
      direction={StackDirection.ROW}
      className="w-[1063px] h-[370px] bg-primary-surface rounded-[16px] overflow-hidden"
    >
      {/* Left column  */}
      <div className="w-[80px] bg-[#0078FF] relative ">
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[-90deg] text-nowrap text-white text-lg font-medium tracking-[4.6px]">
          FAST ONWARD
        </p>
      </div>

      {/* Middle section with content */}
      <Stack
        direction={StackDirection.COLUMN}
        className="w-[611px] pl-12 py-[88px] gap-3"
      >
        <p className="text-sm font-semibold leading-4 tracking-[2px] text-primary">
          STEP {stepNumber}
        </p>
        <H3 className="w-[500px]">{title}</H3>
        <LargeText className="w-[524px]">{description}</LargeText>
      </Stack>

      {/* Runway and airplane */}
      <div className="w-[60px] h-[370px] relative ">
        {/* Runway SVG */}
        <Image
          src="/images/pages/home/how-it-works-stroke-image.svg"
          alt="plane runway"
          width={43}
          height={393}
          className=" mx-auto"
        />

        {/* Airplane icon - positioned based on step number */}
        <div
          className={`absolute w-[80px]  left-1/2 -translate-x-1/2 ${getPlanePosition()}`}
        >
          <Image
            src="/icons/pages/home/how-it-works-plane-icon.webp"
            alt="airplane"
            width={80}
            height={80}
            className="object-fill w-full"
          />
        </div>
      </div>

      {/* Right section with person image */}
      <div className="w-[318px] flex items-center pr-6 pl-2 ">
        <Image
          src={bannerImage}
          alt={title}
          width={286}
          height={322}
          className="object-cover"
        />
      </div>
    </Stack>
  );
}

export function HowItWorksSection() {
  const steps = [
    {
      stepNumber: 1,
      title: "Enter Flight Details",
      description:
        "Search for real flights that suit your travel plans on platforms like Google Flights, Expedia, or Skyscanner. In our form, simply enter your departure and arrival cities, travel date and time, and the airline. You can also add a return flight if needed to create a round-trip itinerary.",
      bannerImage: "/images/pages/home/how-it-works-step-one-banner-image.webp",
    },
    {
      stepNumber: 2,
      title: "Enter Passenger Information",
      description:
        "Fill in your full name and passport number exactly as they appear on your official documents. If you're traveling with others, you can add more passengers to the same ticket for just $6 per additional person. We ensure your ticket matches your ID for maximum acceptance.",
      bannerImage: "/images/pages/home/how-it-works-step-two-banner-image.webp",
    },
    {
      stepNumber: 3,
      title: "Pay and Receive Your Ticket Instantly",
      description:
        "Double-check all your details, enter your email address, and complete the secure payment. Within moments, you’ll receive a high-quality PDF itinerary in your inbox — ready to download, print, or show to immigration officers or visa officials.",
      bannerImage:
        "/images/pages/home/how-it-works-step-three-banner-image.webp",
    },
  ];

  return (
    <section className="">
      <Container>
        <Stack
          direction={StackDirection.COLUMN}
          alignment="center"
          gap={Spacing["LG"]}
          className="relative "
        >
          <SectionLabel>HOW IT WORKS</SectionLabel>
          <H2 className="text-center">
            Get Your Onward Ticket
            <br />
            in 3 Simple Steps
          </H2>
          {/* Decorative cloud in the top right */}

          <Image
            src="/images/pages/home/how-it-works-top-cloud.svg"
            alt="Decorative cloud"
            width={336}
            height={115}
            className="absolute top-0 -right-4"
          />
        </Stack>

        <Stack className="my-[50px] gap-10 items-center">
          {steps.map((step) => (
            <StepCard
              key={step.stepNumber}
              stepNumber={step.stepNumber}
              title={step.title}
              description={step.description}
              bannerImage={step.bannerImage}
            />
          ))}
        </Stack>

        {/* Support team message */}
        <div className="relative text-center h-[104px]">
          <LargeText>
            Need help? Our{" "}
            <span className="text-primary font-semibold">Support Team</span> is
            available around the clock to assist you.
          </LargeText>

          {/* Decorative cloud in the bottom left */}

          <Image
            src="/images/pages/home/how-it-works-bottom-cloud.svg"
            alt="Decorative cloud"
            width={286}
            height={115}
            className="absolute -left-4 bottom-0"
          />
        </div>
      </Container>
    </section>
  );
}
