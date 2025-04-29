import React from "react";
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        "bg-primary-surface text-primary flex items-center rounded-full px-5 h-[34px] w-fit",
        className,
      )}
    >
      <p className=" tracking-[2px] font-semibold text-[14px] leading-[16.8px] ">
        {children}
      </p>
    </div>
  );
}
