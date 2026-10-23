import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

/** Routes internal <a href="/..."> clicks through the router and handles scroll on navigation. */
export function RouteEffects() {
  const navigate = useNavigate();
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor || anchor.target === "_blank") return;
      const href = anchor.getAttribute("href");
      if (!href) return;
      if (href.startsWith("/")) {
        e.preventDefault();
        navigate(href);
      } else if (href.startsWith("#") && href.length > 1 && !document.getElementById(href.slice(1))) {
        e.preventDefault();
        navigate(`/${href}`);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [navigate]);

  return null;
}