import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "../ui/WhatsAppButton";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Clears the fixed navbar (≈113px when scrolled) with breathing room. */
const NAV_OFFSET = 128;

export const Layout = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    // Deep link (e.g. /sectors#finance-banking). Wait two frames so the new
    // route's markup is committed and laid out before we measure the target.
    const id = decodeURIComponent(hash.slice(1));
    let inner = 0;
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => {
        const target = document.getElementById(id);
        if (!target) {
          window.scrollTo(0, 0);
          return;
        }
        // Measure by layout offset, not getBoundingClientRect: scroll-in reveals
        // are mid-transform when we land, and a rect would bake that offset in.
        let top = 0;
        for (let node: HTMLElement | null = target; node; node = node.offsetParent as HTMLElement | null) {
          top += node.offsetTop;
        }
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({
          top: Math.max(top - NAV_OFFSET, 0),
          behavior: reduceMotion ? "auto" : "smooth",
        });
      });
    });

    return () => {
      cancelAnimationFrame(outer);
      cancelAnimationFrame(inner);
    };
  }, [pathname, hash]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-[88px]">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
