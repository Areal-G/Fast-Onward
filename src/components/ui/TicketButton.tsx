import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { cva, type VariantProps } from "class-variance-authority";

const ticketButtonVariants = cva(
  "inline-flex items-center justify-between w-[179px] h-[40px] p-1 pr-5 rounded-full transition-all",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary-hover ",
        secondary: "bg-white text-primary",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

interface TicketButtonProps
  extends React.ComponentPropsWithoutRef<typeof Link>,
    VariantProps<typeof ticketButtonVariants> {
  children?: React.ReactNode;
  className?: string;
  href: string;
}

export function TicketButton({
  className,
  href,
  variant = "primary",
  ...props
}: TicketButtonProps) {
  const arrowIcon =
    variant === "secondary"
      ? "/icons/ticket-button-right-arrow-blue-fill-icon.svg"
      : "/icons/ticket-button-right-arrow-white-fill-icon.svg";

  return (
    <Link
      href={href}
      className={cn(ticketButtonVariants({ variant, className }))}
      {...props}
    >
      <Image src={arrowIcon} alt="ticket" width={32} height={32} />

      <span className="text-[14px] leading-[17px] tracking-[0.8px] font-semibold">
        GET MY TICKET
      </span>
    </Link>
  );
}
