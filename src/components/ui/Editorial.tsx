import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "../../utils/cn";

/**
 * Single reveal used across the About page so every section shares one
 * motion language instead of a different fade per component.
 */
export const Reveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
}> = ({ children, delay = 0, className }) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * The page signature: a two-digit index, a micro-label, and a hairline that
 * runs off toward the margin. Opens every section.
 */
export const SectionLabel: React.FC<{
  index: string;
  label: string;
  className?: string;
}> = ({ index, label, className }) => (
  <div className={cn("flex items-center gap-4", className)}>
    <span className="font-serif text-gold text-sm leading-none tabular-nums">{index}</span>
    <span className="text-[0.6rem] sm:text-[0.7rem] uppercase tracking-[0.2em] sm:tracking-[0.32em] text-muted-white/60 whitespace-nowrap min-w-0 truncate">
      {label}
    </span>
    <span
      aria-hidden="true"
      className="h-px flex-1 bg-gradient-to-r from-gold/40 via-white/10 to-transparent"
    />
  </div>
);

/** Consistent vertical rhythm and max width for every About section. */
export const EditorialSection: React.FC<{
  id?: string;
  children: React.ReactNode;
  className?: string;
}> = ({ id, children, className }) => (
  <section id={id} className={cn("relative py-[clamp(4.5rem,10vw,8.5rem)]", className)}>
    <div className="container mx-auto px-6 lg:px-12 relative z-10">{children}</div>
  </section>
);
