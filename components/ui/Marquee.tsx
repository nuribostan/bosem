// components/ui/Marquee.tsx
import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  direction?: "left" | "right";
  className?: string;
  pauseOnHover?: boolean;
  backgroundColor?: string;
  textColor?: string;
  separator?: string;
}

const Marquee = ({
  children,
  speed = 20,
  direction = "left",
  className = "",
  pauseOnHover = false,
  backgroundColor = "bg-black",
  textColor = "text-white",
  separator = "•",
}: MarqueeProps) => {
  return (
    <div
      className={`relative w-full overflow-hidden px-6  ${backgroundColor} ${className}`}
    >
      <div
        className={`flex shrink-0  ${pauseOnHover ? "marquee-pause" : ""}`}
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
          willChange: "transform",
        }}
      >
        <div className={`flex items-center shrink-0 pr-10 ${textColor}`}>
          {children}
          {separator && (
            <span className="ml-10 text-2xl opacity-50">{separator}</span>
          )}
        </div>

        <div aria-hidden="true" className={`flex items-center shrink-0 pr-10 ${textColor}`}>
          {children}
          {separator && (
            <span className="ml-10 text-2xl opacity-50">{separator}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
