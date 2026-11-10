import { useEffect } from "react";

/**
 * Fades elements marked with `data-reveal` into view once they scroll onto the
 * screen. The hidden starting state only exists in CSS when the visitor has not
 * asked for reduced motion, so nothing is ever left invisible.
 */
export function useRevealOnScroll() {
  useEffect(() => {
    const items = document.querySelectorAll("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
