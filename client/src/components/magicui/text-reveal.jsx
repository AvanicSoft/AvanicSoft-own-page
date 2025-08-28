"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import React from "react";

import { cn } from "@/lib/utils";

export const TextReveal = ({ children, className }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const childArray = React.Children.toArray(children);

  // Flatten into "words" whether text or React element
  const items = childArray.flatMap((child) => {
    if (typeof child === "string") {
      return child
        .split(" ")
        .filter(Boolean)
        .map((w) => ({ type: "word", content: w }));
    }
    return [{ type: "element", content: child }];
  });

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div className="sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]">
        <span className="flex flex-wrap p-5 text-2xl font-bold text-black/20 dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl">
          {items.map((item, i) => {
            const start = i / items.length;
            const end = start + 1 / items.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {item.content}
              </Word>
            );
          })}
        </span>
      </div>
    </div>
  );
};

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mx-1 lg:mx-1.5">
      <span className="absolute opacity-30">{children}</span>
      <motion.span
        style={{ opacity }}
        className="text-black dark:text-white"
      >
        {children}
      </motion.span>
    </span>
  );
};
