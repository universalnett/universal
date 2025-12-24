import React from "react";
import { Button } from "@/components/ui/button";
import { PHONE_NUMBER, DISPLAY_PHONE } from "@/lib/constants";
import { Phone } from "lucide-react";

type Props = {
  children?: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: string;
};

export const PhoneButton = ({ children, className, size = "default", variant = "default" }: Props) => {
  const label = children ?? DISPLAY_PHONE;
  return (
    <Button asChild size={size as any} variant={variant as any} className={className}>
      <a href={`tel:${PHONE_NUMBER}`} aria-label={`Call ${DISPLAY_PHONE}`}>
        <span className="inline-flex items-center gap-2">
          <Phone className="w-4 h-4" />
          {label}
        </span>
      </a>
    </Button>
  );
};

export default PhoneButton;
