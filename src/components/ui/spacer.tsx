import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const SpacerVariants = cva("", {
  variants: {
    space: {
      top: "!pb-0 md:!pb-0 lg:!pb-0", // Top Spacer only
      bottom: "!pt-0 md:!pt-0 lg:!pt-0", // Bottom Spacer only
    },
    size: {
      default: "py-8 md:py-10 lg:py-20",
      medium: "py-6 md:py-8 lg:py-10",
      small: "py-3 md:py-4 lg:py-6",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

// Define props for the Spacer component
interface SpacerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof SpacerVariants> {
  children: React.ReactNode;
}

/**
 * Spacer Component
 *
 * A reusable utility component for applying consistent spacing using Tailwind CSS.
 * It supports top-only, bottom-only, and default (top and bottom) spacing, with options for responsive adjustments.
 *
 * @param {SpacerProps} props - Props for the Spacer component.
 * @returns {JSX.Element} A div with configurable spacing styles.
 *
 * @example
 * // Default spacing
 * <Spacer>
 *   <Content />
 * </Spacer>
 *
 * @example
 * // Top-only spacing
 * <Spacer space="top">
 *   <Content />
 * </Spacer>
 *
 * @example
 * // Small spacing
 * <Spacer size="small">
 *   <Content />
 * </Spacer>
 */

export const Spacer = ({ space, size, className, children }: SpacerProps) => {
  return (
    <div className={cn(SpacerVariants({ space, size }), className)}>
      {children}
    </div>
  );
};
