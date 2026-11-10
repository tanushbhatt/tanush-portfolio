import { useEffect, useState } from "react";

/**
 * Returns the id of the section currently in view, so the navigation can
 * highlight it. A section becomes "active" once its top passes ~35% of the
 * viewport height; at the very bottom of the page the last section wins.
 */
export function useScrollSpy(ids) {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const offset = window.innerHeight * 0.35;
      let current = ids[0];

      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - offset <= 0) current = id;
      }

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom) current = ids[ids.length - 1];

      setActiveId(current);
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [ids]);

  return activeId;
}
