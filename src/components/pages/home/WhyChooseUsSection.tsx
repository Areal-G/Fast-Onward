import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { H2 } from "@/components/ui/typography";
import { FeatureCard } from "@/components/pages/home/FeatureCard";
import Image from "next/image";
export function WhyChooseUsSection() {
  const features = [
    {
      title: "Instant Delivery",
      description:
        "Receive your flight reservation in less than 60 seconds — ideal for visa applications or sudden airport checks.",
      image: "/images/pages/home/instant-delivery-image.webp",
    },
    {
      title: "100% Accepted Worldwide",
      description:
        "Our tickets use real-time flight data and are trusted by airlines, embassies, and immigration worldwide.",
      image: "/images/pages/home/accepted-worldwide-image.webp",
    },
    {
      title: "Travel with Flexibility",
      description:
        "Perfect for digital nomads, tourists, and backpackers who need a quick and reliable travel document.",
      image: "/images/pages/home/travel-with-flexibility-image.webp",
    },
    {
      title: "Super Simple Process",
      description:
        "No account needed. Just fill in your flight details, complete payment, and get your ticket instantly.",
      image: "/images/pages/home/super-simple-process-image.webp",
    },
    {
      title: "Safe & Secure",
      description:
        "Your data is encrypted, used only for your ticket, and permanently deleted after the validity period.",
      image: "/images/pages/home/safe-secure-image.webp",
    },
    {
      title: "Genuine-looking Documents",
      description:
        "Your ticket looks like a real booking — complete with airline logo, flight numbers, and QR code scanning.",
      image: "/images/pages/home/genuine-looking-documents-image.webp",
    },
  ];

  return (
    <section>
      <Container className="relative">
        <div className="text-center relative pt-5 mb-12">
          <SectionLabel className="mx-auto mb-4">WHY CHOOSE US</SectionLabel>
          <H2>
            Why Travelers Choose
            <br />
            Fast Onward
          </H2>
          <Image
            src="/images/pages/home/why-choose-us-cloud-top-image.svg"
            alt="Decorative cloud"
            width={336}
            height={116}
            className="absolute top-0 right-0"
          />
        </div>

        <div className="grid w-[1063px] pb-[100px] mx-auto grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              image={feature.image}
            />
          ))}
        </div>
        <Image
          src="/images/pages/home/why-choose-us-cloud-bottom-image.svg"
          alt="Decorative cloud"
          width={298}
          height={144}
          className="absolute bottom-0 left-0"
        />
      </Container>
    </section>
  );
}
