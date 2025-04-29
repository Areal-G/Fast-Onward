import { H6, MediumText } from "@/components/ui/typography";
import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  image,
  className = "",
}: FeatureCardProps) {
  return (
    <div
      className={`px-5 py-[30px] w-[339px] text-center rounded-2xl space-y-3 border border-[#B8DBFC] ${className}`}
    >
      <div className=" flex items-center mb-2 justify-center">
        <Image
          src={image}
          alt={title}
          width={140}
          height={90}
          className="object-contain"
        />
      </div>

      <H6>{title}</H6>

      <MediumText>{description}</MediumText>
    </div>
  );
}
