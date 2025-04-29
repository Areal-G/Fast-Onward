import * as React from "react";
import { cn } from "@/lib/utils";

const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      className={cn("mx-auto h-full px-4 max-w-full w-[1440px]", className)}
      ref={ref}
      {...props}
    />
  );
});

Container.displayName = "Container";

export { Container };
