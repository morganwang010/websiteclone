"use client";

import { ArrowUpIcon } from "./icons";

export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div id="backTop" className="fixed right-3 top-[75%] z-[888]">
      <a
        id="gttop"
        onClick={scrollToTop}
        className="flex items-center justify-center w-10 h-[50px] bg-[#2460f2] rounded-t-lg cursor-pointer shadow-[0_2px_10px_rgba(0,0,0,0.1)] hover:bg-[#1a4fd4] transition-colors"
        aria-label="Scroll to top"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            scrollToTop();
          }
        }}
      >
        <ArrowUpIcon className="w-5 h-5 text-white" />
      </a>
    </div>
  );
}
