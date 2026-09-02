import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./Button";
import { EditorialSection, Reveal, SectionLabel } from "./Editorial";

interface EditorialCTAProps {
  index: string;
  label: string;
  heading: string;
  body: string;
  primary: { label: string; to: string };
  secondary: { label: string; to: string };
}

export const EditorialCTA: React.FC<EditorialCTAProps> = ({
  index,
  label,
  heading,
  body,
  primary,
  secondary,
}) => (
  <EditorialSection className="bg-dark-navy border-t border-white/5">
    <Reveal>
      <div className="relative border border-white/10 bg-deep-navy overflow-hidden">
        <div
          className="absolute -top-40 -right-24 h-[30rem] w-[30rem] rounded-full bg-gold/[0.08] blur-[120px] pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-gold/60 via-gold/10 to-transparent"
          aria-hidden="true"
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-10 items-center p-[clamp(2rem,5vw,4.5rem)]">
          <div className="lg:col-span-7">
            <SectionLabel index={index} label={label} className="mb-8 max-w-xs" />
            <h2 className="font-serif text-white text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.12] tracking-[-0.015em] mb-6 text-balance">
              {heading}
            </h2>
            <p className="text-muted-white/75 leading-[1.8] font-light max-w-[54ch]">{body}</p>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-stretch">
            <Link to={primary.to} className="inline-flex">
              <Button variant="primary" size="lg" className="w-full">
                {primary.label}
              </Button>
            </Link>
            <Link
              to={secondary.to}
              className="inline-flex items-center justify-center gap-2 h-14 px-8 border border-white/15 text-muted-white hover:text-gold hover:border-gold/50 transition-colors duration-300 rounded-sm text-base font-medium"
            >
              {secondary.label}
              <ArrowUpRight size={18} strokeWidth={1.6} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  </EditorialSection>
);
