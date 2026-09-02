import * as React from "react";
import { cn } from "../../utils/cn";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  /** Render as the page's h1 where this header IS the page title. */
  as?: "h1" | "h2";
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  as: Heading = "h2",
  title,
  subtitle,
  alignment = "left",
  className,
  titleClassName,
  subtitleClassName,
}) => {
  const alignClass = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn("mb-12 max-w-3xl", alignClass[alignment], className)}
    >
      <Heading className={cn("text-3xl md:text-5xl font-serif mb-4 text-white", titleClassName)}>
        {title}
      </Heading>
      {subtitle && (
        <p className={cn("text-lg md:text-xl text-muted-white/80 font-light", subtitleClassName)}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
