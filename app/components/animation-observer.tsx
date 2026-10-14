"use client";

import { useEffect } from "react";

/** Starts scroll reveal animations when content enters the viewport. */
export default function AnimationObserver() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const reveal = (root: ParentNode) => {
      const selector = "[data-reveal], [data-reveal-stagger] > *";
      const elements = [
        ...(root instanceof HTMLElement && root.matches(selector) ? [root] : []),
        ...root.querySelectorAll<HTMLElement>(selector),
      ];
      elements.forEach((element) => {
        if (element.dataset.revealObserved) return;
        element.dataset.revealObserved = "true";
        if (element.matches("[data-reveal-stagger] > *")) {
          const siblings = element.parentElement?.children ?? [];
          element.style.setProperty("--reveal-delay", `${Math.min(Array.from(siblings).indexOf(element), 6) * 90}ms`);
        }
        observer.observe(element);
      });
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        target.classList.add("reveal-visible");
        observer.unobserve(target);
      });
    // A zero threshold also handles tall cards/sections on short mobile screens.
    }, { threshold: 0, rootMargin: "0px 0px 80px 0px" });

    try {
      reveal(document);
      const mutations = new MutationObserver((records) => {
        records.forEach((record) => record.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) reveal(node);
        }));
      });
      mutations.observe(document.body, { childList: true, subtree: true });
      return () => { observer.disconnect(); mutations.disconnect(); };
    } catch {
      observer.disconnect();
    }
  }, []);

  return null;
}
