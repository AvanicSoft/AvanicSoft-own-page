import { useEffect, useState } from "react";

export default function ScrollIndicator({ navbarHeight = 70, colorGradient = "linear-gradient(90deg, #ff6b6b, #4ecdc4)" }) {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollTop / scrollHeight) * 100;
      setScrollWidth(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: navbarHeight + "px",
        left: 0,
        width: `${scrollWidth}%`,
        height: "3px",
        background: colorGradient,
        zIndex: 1001,
        transition: "width 0.1s ease",
      }}
    />
  );
}
