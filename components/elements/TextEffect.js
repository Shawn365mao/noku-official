import { useEffect, useMemo, useState } from "react";

export default function TextEffect({ text1 = "", text2 = "" }) {
  const fullText = useMemo(() => `${text1}${text2}`, [text1, text2]);
  const [i, setI] = useState(0);

  useEffect(() => {
    if (!fullText) return;
    const timer = setInterval(() => {
      setI((prev) => (prev >= fullText.length ? 0 : prev + 1));
    }, 90);
    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <span>
      {fullText.slice(0, i)}
      <span style={{ opacity: 0.6 }}>|</span>
    </span>
  );
}
