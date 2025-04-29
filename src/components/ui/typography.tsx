import { HTMLAttributes, forwardRef, ElementType } from "react";
import { cn } from "@/lib/utils";

import { Color } from "./color";

// Font size enum with mobile responsive values
export enum FontSize {
  // Mobile,       Desktop
  // heading
  H1 = "text-[--] md:text-[56px]", //filled
  H2 = "text-[--] md:text-[40px]", //filled
  H3 = "text-[--] md:text-[28px]",
  H4 = "text-[--] md:text-[24px]",
  H5 = "text-[--] md:text-[1px]",
  H6 = "text-[--] md:text-[18px]", // filled
  // body
  LARGE = "text-[---] md:text-[16px]", //filled
  MEDIUM = "text-[--] md:text-[14px]", //filled
  SMALL = "text-[--] md:text-[  ]",
  // button
  BUTTON_LARGE = "text-[--] md:text-[15px]", //filled
  BUTTON = "text-[--] md:text-[16px]", //filled
}

// Line height enum
export enum LineHeight {
  // Mobile,       Desktop
  H1 = "leading-[--] md:leading-[61.6px]", //filled
  H2 = "leading-[--] md:leading-[44px]", //filled
  H3 = "leading-[--] md:leading-[32px]",
  H4 = "leading-[--] md:leading-[27px]",
  H5 = "leading-[--] md:leading-[20px]",
  H6 = "leading-[--] md:leading-[20.8px]", //filled
  LARGE = "leading-[---] md:leading-[24px]", //filled
  MEDIUM = "leading-[--] md:leading-[18.2px]", //filled
  SMALL = "leading-[--] md:leading-[17px]",
  BUTTON_LARGE = "leading-[--] md:leading-[18px]", //filled
  BUTTON = "leading-[--] md:leading-[24px]", //filled
}

// Font weight enum
export enum FontWeight {
  LIGHT = "font-light", // 300
  REGULAR = "font-normal", // 400
  MEDIUM = "font-medium", // 500
  SEMIBOLD = "font-semibold", // 600
  BOLD = "font-bold", // 700
}

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  color?: Color;
  size?: FontSize;
  weight?: FontWeight;
  lineHeight?: LineHeight | string;
  title?: string;
}

// Base Typography Component
const Typography = forwardRef<HTMLElement, TypographyProps>(
  (
    {
      as: Component = "p",
      color = Color.FOREGROUND,
      size = FontSize.MEDIUM,
      weight = FontWeight.REGULAR,
      lineHeight = LineHeight.MEDIUM,
      className,
      title,
      ...props
    },
    ref,
  ) => {
    const Comp = Component;
    return (
      <Comp
        ref={ref}
        className={cn(size, weight, lineHeight, color, className)}
        title={title}
        {...props}
      />
    );
  },
);
Typography.displayName = "Typography";

export const H1 = (props: TypographyProps) => (
  <Typography
    as="h1"
    size={FontSize.H1}
    weight={FontWeight.SEMIBOLD}
    lineHeight={LineHeight.H1}
    {...props}
  />
);

export const H2 = (props: TypographyProps) => (
  <Typography
    as="h2"
    size={FontSize.H2}
    weight={FontWeight.SEMIBOLD}
    lineHeight={LineHeight.H2}
    {...props}
  />
);

export const H3 = (props: TypographyProps) => (
  <Typography
    as="h3"
    size={FontSize.H3}
    weight={FontWeight.SEMIBOLD}
    lineHeight={LineHeight.H3}
    {...props}
  />
);

export const H4 = (props: TypographyProps) => (
  <Typography
    as="h4"
    size={FontSize.H4}
    weight={FontWeight.SEMIBOLD}
    lineHeight={LineHeight.H4}
    {...props}
  />
);

export const H5 = (props: TypographyProps) => (
  <Typography
    as="h5"
    size={FontSize.H5}
    weight={FontWeight.SEMIBOLD}
    lineHeight={LineHeight.H5}
    {...props}
  />
);

export const H6 = (props: TypographyProps) => (
  <Typography
    as="h6"
    size={FontSize.H6}
    weight={FontWeight.SEMIBOLD}
    lineHeight={LineHeight.H6}
    {...props}
  />
);

export const LargeText = (props: TypographyProps) => (
  <Typography
    as="p"
    size={FontSize.LARGE}
    weight={FontWeight.LIGHT}
    lineHeight={LineHeight.LARGE}
    {...props}
  />
);

export const MediumText = (props: TypographyProps) => (
  <Typography
    as="p"
    size={FontSize.MEDIUM}
    weight={FontWeight.LIGHT}
    lineHeight={LineHeight.MEDIUM}
    {...props}
  />
);

export const SmallText = (props: TypographyProps) => (
  <Typography
    as="p"
    size={FontSize.SMALL}
    weight={FontWeight.REGULAR}
    lineHeight={LineHeight.SMALL}
    {...props}
  />
);

export const ButtonLargeText = (props: TypographyProps) => (
  <Typography
    as="span"
    size={FontSize.BUTTON_LARGE}
    weight={FontWeight.SEMIBOLD}
    lineHeight={LineHeight.BUTTON_LARGE}
    {...props}
  />
);

export const ButtonText = (props: TypographyProps) => (
  <Typography
    as="span"
    size={FontSize.BUTTON}
    weight={FontWeight.REGULAR}
    lineHeight={LineHeight.BUTTON}
    {...props}
  />
);
