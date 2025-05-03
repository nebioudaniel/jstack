// Import the utility to merge class names conditionally
import { cn } from "@/utils";
// Nebiou Daniel on April 30,2025
// Import React types
import { HTMLAttributes, ReactNode } from "react";

// Define props interface for the Heading component
// Inherits all native <h1> HTML attributes and accepts optional children
interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode; // Content to be displayed inside the heading
}

// Functional component that renders an <h1> element with custom styles and props
export const Heading = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h1
      // Combine default Tailwind styles with any additional classes passed via props
      className={cn(
        "text-4xl sm:text-5xl text-pretty font-heading font-semibold tracking-tight text-zinc-800",
        className
      )}
      // Spread additional HTML attributes like id, onClick, etc.
      {...props}
    >
      {/* Render the heading content */}
      {children}
    </h1>
  );
};
