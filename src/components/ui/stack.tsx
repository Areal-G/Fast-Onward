import React, { FC, ReactNode } from "react";
import clsx from "clsx";

import { Spacing } from "@/components/ui/spacing";

export const enum StackDirection {
  ROW = "row",
  COLUMN = "col",
  ROW_REVERSE = "row-reverse",
  COLUMN_REVERSE = "col-reverse",
}

/**
 * Breakpoint definitions matching Tailwind CSS defaults.
 */
type Breakpoint = "base" | "sm" | "md" | "lg" | "xl" | "2xl";

/**
 * Type definitions for responsive props.
 */
type ResponsiveProp<T> = Partial<Record<Breakpoint, T>>;

/**
 * Alignment options corresponding to Tailwind CSS `items-*` classes.
 */
type Alignment = "start" | "center" | "end" | "stretch" | "baseline" | "auto";

/**
 * Justification options corresponding to Tailwind CSS `justify-*` classes.
 */
type Justification =
  | "start"
  | "center"
  | "end"
  | "between"
  | "around"
  | "evenly"
  | "stretch";

/**
 * Direction options corresponding to Tailwind CSS `flex-row` `flex-row-reverse` `flex-col` and `flex-col-reverse` classes.
 */
type Direction =
  | StackDirection.ROW
  | StackDirection.COLUMN
  | StackDirection.ROW_REVERSE
  | StackDirection.COLUMN_REVERSE;

/**
 * Responsive direction type.
 */
type ResponsiveDirection = ResponsiveProp<Direction>;

/**
 * Responsive alignment type.
 */
type ResponsiveAlignment = ResponsiveProp<Alignment>;

/**
 * Responsive justification type.
 */
type ResponsiveJustification = ResponsiveProp<Justification>;

/**
 * Responsive gap type.
 */
type ResponsiveGap = ResponsiveProp<Spacing>;

/**
 * Props interface for the Stack component.
 */
interface StackProps {
  /**
   * The content of the stack.
   */
  children: ReactNode;

  /**
   * Gap between children. Can be a single Spacing value or a responsive object.
   */
  gap?: Spacing | ResponsiveGap;

  /**
   * Direction of the stack. Can be a single value or responsive.
   */
  direction?: Direction | ResponsiveDirection;

  /**
   * Alignment of items along the cross axis. Can be a single value or responsive.
   */
  alignment?: Alignment | ResponsiveAlignment;

  /**
   * Justification of items along the main axis. Can be a single value or responsive.
   */
  justification?: Justification | ResponsiveJustification;

  /**
   * Additional custom classes.
   */
  className?: string;

  /**
   * The HTML element to render the stack as.
   * @default 'div'
   */
  as?: React.ElementType;
}

/**
 * Utility function to generate responsive class names for a given property.
 * @param prop The prop value, either single or responsive.
 * @param classGenerator Function to generate class names based on the value.
 * @returns A string of Tailwind CSS class names.
 */
const generateResponsiveClasses = <T,>(
  prop: T | ResponsiveProp<T> | undefined,
  classGenerator: (value: T) => string,
): string => {
  if (!prop) return "";

  if (typeof prop !== "object") {
    return classGenerator(prop as T);
  }

  return Object.entries(prop)
    .map(([breakpoint, value]) =>
      breakpoint === "base"
        ? classGenerator(value as T)
        : `${breakpoint}:` + classGenerator(value as T),
    )
    .join(" ");
};

/**
 * Stack component that arranges its children in a flex container with customizable gap, direction, alignment, and justification.
 */
export const Stack: FC<StackProps> = ({
  children,
  gap,
  direction = StackDirection.COLUMN,
  alignment,
  justification,
  className,
  as: Component = "div",
}) => {
  const directionClasses = generateResponsiveClasses<Direction>(
    direction,
    (dir) => {
      return `flex-${dir}`;
    },
  );

  /**
   * Generate gap classes using the Spacing enum.
   */
  const gapClasses = generateResponsiveClasses<Spacing>(
    gap,
    (spacing) => `gap-${spacing}`,
  );

  /**
   * Generate alignment classes.
   */
  const alignmentClasses = generateResponsiveClasses<Alignment>(
    alignment,
    (align) => {
      switch (align) {
        case "start":
          return "items-start";
        case "center":
          return "items-center";
        case "end":
          return "items-end";
        case "stretch":
          return "items-stretch";
        case "baseline":
          return "items-baseline";
        case "auto":
          return "items-auto";
        default:
          return "";
      }
    },
  );

  /**
   * Generate justification classes.
   */
  const justificationClasses = generateResponsiveClasses<Justification>(
    justification,
    (justify) => {
      switch (justify) {
        case "start":
          return "justify-start";
        case "center":
          return "justify-center";
        case "end":
          return "justify-end";
        case "between":
          return "justify-between";
        case "around":
          return "justify-around";
        case "evenly":
          return "justify-evenly";
        case "stretch":
          return "justify-stretch";
        default:
          return "";
      }
    },
  );

  /**
   * Combine all classes using clsx.
   */
  const combinedClasses = clsx(
    "flex",
    directionClasses,
    gapClasses,
    alignmentClasses,
    justificationClasses,
    className,
  );

  const Tag = Component as React.ElementType;

  return <Tag className={combinedClasses}>{children}</Tag>;
};
