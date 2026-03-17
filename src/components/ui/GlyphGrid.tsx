import { useState, useCallback, useEffect } from "react";

const GLYPHS = [
  "0", "1", "0", "1", "0", "1", 
  "ニ", "ティ", "ギ", "ャ", 
  "源", "変", "完", "字", "易", "私", "中", "横", "応", "表", "形", "化", "理", "原", "直", "純", "己"
];

const Cell = () => {
  const [isActive, setIsActive] = useState(false);
  
  const [glyph, setGlyph] = useState("·");

  useEffect(() => {
    const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

    if(!isActive) {
      const randomDelay = randomInt(5000, 25000);
      const timeoutId = setTimeout(() => {
        setIsActive(true);
        setGlyph(GLYPHS[Math.floor(Math.random() * GLYPHS.length)]);

        setTimeout(() => {
          setIsActive(false);
          setGlyph("·");
        }, 1000);
      }, randomDelay);

      return () => clearTimeout(timeoutId);
    }
  }, [isActive]);

  const handleMouseEnter = useCallback(() => {
    setIsActive(true);
    setGlyph(GLYPHS[Math.floor(Math.random() * GLYPHS.length)]);

    setTimeout(() => {
      setIsActive(false);
      setGlyph("·");
    }, 1000);
  }, []);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      className={`flex items-center justify-center w-6 h-6 text-sm transition-all duration-300 select-none ${
        isActive 
          ? "text-primary font-black drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] opacity-100" 
          : "text-neutral-700 font-normal opacity-40"
      }`}
    >
      {glyph}
    </div>
  );
};

export default function GlyphGrid() {
  return (
    <div 
      className="w-full h-full p-4 grid gap-1 justify-items-center cursor-crosshair bg-neutral-950/50"
      style={{ gridTemplateColumns: "repeat(15, minmax(0, 1fr))" }}
    >
      {Array.from({ length: 225 }).map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  );
}