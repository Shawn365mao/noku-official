import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Back to top"
      style={{
        position: "fixed",
        right: 18,
        bottom: 18,
        width: 44,
        height: 44,
        borderRadius: 9999,
        border: "none",
        cursor: "pointer",
        boxShadow: "0 10px 30px rgba(0,0,0,.15)",
        background: "#111827",
        color: "#fff",
        zIndex: 9999
      }}
    >
      ↑
    </button>
  );
}
